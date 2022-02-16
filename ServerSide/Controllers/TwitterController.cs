using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http; //added
using System.Threading.Tasks; //added
using TweetStock.Models; //added

namespace TweetStock.Controllers
{
    public class TwitterController : ApiController
    {
        // GET api/<controller>
        public async Task<Object> Get(string ticker)
        {
            TwitterModel tm = new TwitterModel();
            //return await tm.getByURL("https://api.twitter.com/2/tweets/search/recent?query=TSLA");
            // HANDLE TRUNCATED TWEETS PROBLEM
            return await tm.getByURL("https://api.twitter.com/1.1/search/tweets.json?q=$"+ticker+"&count=100&result_type=popular");
        }

        // GET api/<controller>/5
        public string Get(int id, string temp)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}