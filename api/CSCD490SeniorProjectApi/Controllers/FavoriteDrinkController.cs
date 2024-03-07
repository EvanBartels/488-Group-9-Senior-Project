using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Security.AccessControl;

namespace CSCD490SeniorProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteDrinkController : ControllerBase
    {
        private IConfiguration _configuration;

        public FavoriteDrinkController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("AddFavoriteDrink")]
        public JsonResult AddFavoriteDrink(string userEmail, string drinkName)
        {
            string query = "insert into dbo.favoriteDrinks (userEmail, drinkName) values ('" + userEmail + "', '" + drinkName + "')";
            DataTable dataTable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    dataTable.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(dataTable);
        }
        // TODO - Add a method to remove a favorite drink and remove all favorite drinks and to get favorite drinks
        [HttpGet]
        [Route("GetFavoriteDrinks")]
        public JsonResult GetFavoriteDrinks(string userEmail)
        {
            string query = "select drinkName from dbo.favoriteDrinks where userEmail = '" + userEmail + "'";
            DataTable dataTable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    dataTable.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(dataTable);
        }
        [HttpPut]
        [Route("RemoveFavoriteDrink")]
        public JsonResult RemoveFavoriteDrink(string userEmail, string drinkName)
        {
            string query = "delete from dbo.favoriteDrinks where userEmail = '" + userEmail + "' and drinkName = '" + drinkName + "'";
            DataTable dataTable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    dataTable.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(dataTable);
        }
        [HttpDelete]
        [Route("RemoveAllFavoriteDrinks")]
        public JsonResult RemoveAllFavoriteDrinks(string userEmail)
        {
            string query = "delete from dbo.favoriteDrinks where userEmail = '" + userEmail + "'";
            DataTable dataTable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    dataTable.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(dataTable);
        }
    }
}
