using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Security.AccessControl;
using System.Text.Json.Nodes;

namespace CSCD490SeniorProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private IConfiguration _configuration;

        public IngredientController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPut]
        [Route("RemoveAllSavedIngredients")]
        public JsonResult RemoveAllSavedIngredients(string userEmail)
        {
            string query = "delete from dbo.savedIngredients where userEmail = '" + userEmail + "'";
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

        [HttpGet]
        [Route("SaveIngredientsFromSelectedIngredients")]
        public JsonResult SaveIngredients(string userEmail, string ingredient)
        {
            string query = "insert into dbo.savedIngredients (userEmail, ingredientName) values ('" + userEmail + "', '" + ingredient + "')";
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

        [HttpGet]
        [Route("SaveIngredient")]
        public JsonResult SaveIngredient(string userEmail, string drinkName)
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
    }
}
