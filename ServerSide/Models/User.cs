using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections;
using finalServerSide.Models.DAL;

namespace finalServerSide.Models
{
    public class User
    {
        int id;
        string firstName;
        string lastName;
        string email;
        string password;
        string address;
        string picture;

        public int Id { get => id; set => id = value; }
        public string FirstName { get => firstName; set => firstName = value; }
        public string LastName { get => lastName; set => lastName = value; }
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
        public string Address { get => address; set => address = value; }
        public string Picture { get => picture; set => picture = value; }

        public User() { }
        public User(string firstName, string lastName, string email, string password, string address, string picture)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.address = address;
            this.picture = picture;
            Id = -1;
        }

        public User(string email)
        {
            this.email = email;
        }

        /* Insert a new user to the User Tbl */
        public int Insert()
        {
            UserDataServices us = new UserDataServices();
            return us.Insert(this); //return 1/-1;
        }

        /* Get User when login to the system, if the user exists - return him */
        public User checkLogin(string email, string pass)
        {
            UserDataServices us = new UserDataServices();
            return us.checkLogIn(email, pass);
        }

        /* Get all users list */
        public List<User> Get()
        {
            UserDataServices us = new UserDataServices();
            return us.GetUsers();
        }

        /* Delete a User from the Users Tbl and his preferences from PreferencesTbl */
        public int Delete(int id)
        {
            UserDataServices db = new UserDataServices();
            return db.DeleteUserFav(id);
        }

        /* Get user by Id */
        public User GetById(int id)
        {
            UserDataServices us = new UserDataServices();
            return us.GetById(id);
        }

        /* Update User Details to the Users Tbl */
        public int UpdateUser()
        {
            UserDataServices us = new UserDataServices();
            return us.UpdateUser(this); //return 1/-1;
        }
    }
}