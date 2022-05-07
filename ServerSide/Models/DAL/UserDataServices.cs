using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Configuration;
using System.Web.Http;
using finalServerSide.Models;

namespace finalServerSide.Models.DAL
{
    public class UserDataServices
    {
        //--------------------------------------------------------------------------------------------------
        // This method creates a connection to the database according to the connectionString name in the web.config 
        //--------------------------------------------------------------------------------------------------
        public SqlConnection connect(String conString)
        {

            // read the connection string from the configuration file
            string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
            SqlConnection con = new SqlConnection(cStr);
            con.Open();
            return con;
        }

        //---------------------------------------------------------------------------------
        // Create the SqlCommand
        //---------------------------------------------------------------------------------
        private SqlCommand CreateCommand(String CommandSTR, SqlConnection con)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = CommandSTR;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.Text; // the type of the command, can also be stored procedure

            return cmd;
        }

        //--------------------------------------------------------------------------------------------------
        // This method inserts a user to the Users table 
        //--------------------------------------------------------------------------------------------------
        public int Insert(User user)
        {        
            SqlConnection con;
            SqlCommand cmd;
            try
            {
                con = connect("DBConnectionString"); // create the connection
                //checking if the email already exists
                String selectSTR = "SELECT * FROM TweetStockApp_Users_2022 WHERE email = '" + user.Email + "'";
                cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end

                while (dr.Read())
                {
                    if (dr.HasRows)
                        return -1;
                }
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            con = connect("DBConnectionString"); // create the connection
            String cStr = BuildInsertCommand(user);      // helper method to build the insert string
            cmd = CreateCommand(cStr, con);             // create the command
            
            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }

        //--------------------------------------------------------------------
        // Build the Insert command String
        //--------------------------------------------------------------------
        private String BuildInsertCommand(User user)
        {
            String command;

            StringBuilder sb = new StringBuilder();
            // use a string builder to create the dynamic string
            sb.AppendFormat("Values('{0}', '{1}', '{2}', '{3}', '{4}', '{5}')", user.FirstName, user.LastName, user.Email, user.Password, user.Address, user.Picture);
            String prefix = "INSERT INTO TweetStockApp_Users_2022 " + "([firstName], [lastName], [email], [password], [address], [picture]) ";
            command = prefix + sb.ToString();
            return command;
        }

        //---------------------------------------------------------------------------------
        // This method check if the user exists in the Users table
        // And return this user if he exists
        //---------------------------------------------------------------------------------
        public User checkLogIn(string email, string pass)
        {
            SqlConnection con = null;
            SqlCommand cmd;
            try
            {
                con = connect("DBConnectionString"); // create the connection
                //checking if the email already exists
                String selectSTR = "SELECT * FROM TweetStockApp_Users_2022 WHERE email = '" + email + "'AND password= '" + pass +"'";
                cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end
                User u = null;
                if (dr.Read())
                {
                    u = new User();
                    u.Id = Convert.ToInt32(dr["id"]);
                    u.FirstName = (string)dr["firstName"];
                    u.LastName = (string)dr["lastName"];
                    u.Email = (string)dr["email"];
                    u.Address = (string)dr["address"];
                    u.Picture = (string)dr["picture"];
                }
                return u;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }

        //---------------------------------------------------------------------------------
        // Get user by Id from Users Tbl
        //---------------------------------------------------------------------------------
        public User GetById(int id)
        {
            SqlConnection con = null;
            SqlCommand cmd;
           
            try
            {
                con = connect("DBConnectionString"); // create the connection
                //checking if the email already exists
                String selectSTR = "SELECT * FROM TweetStockApp_Users_2022 WHERE id = "+ id ;
                cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end
                User u = new User();
                if (dr.Read())
                {
                    u.Id = Convert.ToInt32(dr["id"]);
                    u.FirstName = (string)dr["firstName"];
                    u.LastName = (string)dr["lastName"];
                    u.Email = (string)dr["email"];
                    u.Password = (string)dr["password"];
                    u.Address = (string)dr["address"];
                    u.Picture = (string)dr["picture"];
                }
                return u;
            }
            
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }

        //---------------------------------------------------------------------------------
        // Get List of users from Users Tbl
        //---------------------------------------------------------------------------------
        public List<User> GetUsers()
        {
            SqlConnection con = null;
            SqlCommand cmd;
            try
            {
                con = connect("DBConnectionString"); // create the connection
                List<User> usersList = new List<User>();
                String selectSTR = "SELECT * FROM TweetStockApp_Users_2022";//WHERE isAdmin=false
                cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end
                while (dr.Read())
                {
                    User u = new User();
                    u.Id = Convert.ToInt32(dr["id"]);
                    u.FirstName = (string)dr["firstName"];
                    u.LastName = (string)dr["lastName"];
                    u.Email = (string)dr["email"]; 
                    u.Password = (string)dr["password"];
                    u.Address = (string)dr["address"];
                    u.Picture = (string)dr["picture"];
                    usersList.Add(u);
                }
                return usersList;
            }

            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }

        //---------------------------------------------------------------------------------
        // Update User Details to the Users Tbl
        //---------------------------------------------------------------------------------
        public int UpdateUser(User user)
        {
            SqlConnection con;
            SqlCommand cmd;
            {
                try
                {
                    con = connect("DBConnectionString"); // create the connection
                }
                catch (Exception ex)
                {
                    // write to log
                    throw (ex);
                }

                String cStr = BuildUpdateCommand(user);      // helper method to build the insert string

                cmd = CreateCommand(cStr, con);             // create the command

                try
                {
                    int rowEffected = cmd.ExecuteNonQuery(); // execute the command
                    return rowEffected;
                }
                catch (Exception ex)
                {
                    // write to log
                    throw (ex);
                }

                finally
                {
                    if (con != null)
                    {
                        // close the db connection
                        con.Close();
                    }
                }
            }
        }
        private String BuildUpdateCommand(User user)
        {
            String command;
            String pass = user.Password != "-1" ? "[Password]='"+user.Password+"'," : "";
            StringBuilder string_builder = new StringBuilder();
            // use a string builder to create the dynamic string
            string_builder.AppendFormat(" SET [FirstName]='{0}', [LastName]='{1}', [Email]='{2}', "+pass+" [Picture]='{3}'", user.FirstName, user.LastName, user.Email, user.Picture);
            String prefix = "UPDATE TweetStockApp_Users_2022" + " ";
            String end = " WHERE id= " + user.Id;
            command = prefix + string_builder.ToString() + end;
            return command;
        }

        //---------------------------------------------------------------------------------
        // Delete a Preferences from the Users Tbl, according to the userId the function get
        //---------------------------------------------------------------------------------
        public int DeleteUserFav(int id)
        {

            SqlConnection con;
            SqlCommand cmd;
            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            String cStr = BuildDeleteFavoritesCommand(id); 

            cmd = CreateCommand(cStr, con);             // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                    DeleteUser(id);
                }
            }

        }
        //---------------------------------------------------------------------------------
        // Delete a User from the Users Tbl, according to the userId the function get
        //---------------------------------------------------------------------------------

        public int DeleteUser(int id)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            String cStr = BuildDeleteCommand(id);      // helper method to build the insert string

            cmd = CreateCommand(cStr, con);             // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }

        }

        //--------------------------------------------------------------------
        // Build the DELETE command String
        //--------------------------------------------------------------------
        private String BuildDeleteCommand(int id)
        {
            String command;
            command = "DELETE FROM TweetStockApp_Users_2022 where id =" + id;
            return command;
        }
        //--------------------------------------------------------------------
        // Build the DELETE command String
        //--------------------------------------------------------------------
        private String BuildDeleteFavoritesCommand(int id)
        {
            String command;
            command = "DELETE FROM TweetStockApp_Favorites_2022 where userId =" + id;
            return command;
        }
    }
}