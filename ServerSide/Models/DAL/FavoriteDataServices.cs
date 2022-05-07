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
    public class FavotiteDataServices
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
        // This method inserts Favorite Stock to the Favorites table 
        //--------------------------------------------------------------------------------------------------
        public int InsertFavorite(Favorite fav)
        {
            SqlConnection con;
            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            String query = "INSERT INTO TweetStockApp_Favorites_2022 (userId, ticker) VALUES (@userId,@ticker)";

            using (SqlCommand command = new SqlCommand(query, con))
            {
                command.Parameters.AddWithValue("@userId", fav.UserId);
                command.Parameters.AddWithValue("@ticker", fav.Ticker);

                try
                {
                    int numEffected = command.ExecuteNonQuery();
                    return numEffected;
                }
                catch (SqlException exe)
                {
                    if (!(exe.Number == 2627))
                        throw (exe);
                    return -1;
                }
                finally
                {
                    if (con != null)
                    {
                        con.Close();// close the db connection
                    }
                }
            }
        }

        //Delete Fav
        public int DeleteFavorite(int userId, string ticker)
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

            String cStr = BuildDeleteFavCommand(userId, ticker);      // helper method to build the insert string

            cmd = CreateCommand(cStr, con);             // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the (insert) command
                return numEffected;
            }
            catch (Exception ex)
            {
                throw (ex); // write to log
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
        // Build the DELETE command String///
        //--------------------------------------------------------------------
        private String BuildDeleteFavCommand(int userId, string ticker)
        {
            String command;
            command = "DELETE from TweetStockApp_Favorites_2022 where userId =" + userId + " and ticker = '" + ticker + "'";
            return command;
        }

        //---------------------------------------------------------------------------------
        // Read from the DB into a list all the series names that the user prefered- dataReader
        //---------------------------------------------------------------------------------
        public List<string> GetFavoriteStocks(int userId)
        {
            SqlConnection con = null;
            List<string> favStocks = new List<string>();
            try
            {
                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file

                String selectSTR = "Select * From TweetStockApp_Favorites_2022 WHERE userId = " + userId;
                SqlCommand cmd = new SqlCommand(selectSTR, con);
                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end

                while (dr.Read())
                {   // Read till the end of the data into a row
                    string stockTicker  = (string)dr["ticker"];
                    favStocks.Add(stockTicker);
                }
                return favStocks;
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
                    con.Close();
                }
            }
        }
    }
}