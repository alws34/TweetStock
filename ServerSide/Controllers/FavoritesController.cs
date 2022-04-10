using finalServerSide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace finalServerSide.Controllers
{
    public class FavoritesController : ApiController
    {
        // GET api/<controller>
        public HttpResponseMessage Get(int userId)
        {
            Favorite f = new Favorite();
            List<string> favList = f.GetFav(userId);
            if (favList != null)
            {
                return Request.CreateResponse<List<string>>(HttpStatusCode.OK, favList);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "The user could not save favorite stock");
            }
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody] Favorite fav)
        {
            int feedback = fav.InsertFav();
            if (feedback == 1)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Preferences Inserted");
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, "Preferences already exists");
            }
        }

       // DELETE api/<controller>/5
        public IHttpActionResult Delete(int userId, string ticker)
        {
            try
            {
                Favorite f = new Favorite();
                if (f.DeleteFav(userId, ticker) == 1)
                {
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound, "Doesn't deleted");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }        
    }
}