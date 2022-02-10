using finalServerSide.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace finalServerSide.Models
{
    public class Favorite
    {
        int favId;
        int userId;
        string ticker;

        public Favorite() { }
        public Favorite(int favId, int userId, string ticker)
        {
            this.FavId = -1;
            this.UserId = userId;
            this.Ticker = ticker;
        }

        public int FavId { get => favId; set => favId = value; }
        public int UserId { get => userId; set => userId = value; }
        public string Ticker { get => ticker; set => ticker = value; }

        FavotiteDataServices ds = new FavotiteDataServices();

        public int InsertFav()
        {
            return ds.InsertFavorite(this);
        }

        //DeleteFavStock
        public int DeleteFav(int userId, string ticker)
        {
            return ds.DeleteFavorite(userId, ticker);
        }

        public List<string> GetFav(int userId)
        {
            return ds.GetFavoriteStocks(userId);
        }
    }
}