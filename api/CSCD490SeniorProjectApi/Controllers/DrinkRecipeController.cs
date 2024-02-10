using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Security.AccessControl;

namespace CSCD490SeniorProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrinkRecipeController : ControllerBase
    {
        private IConfiguration _configuration;

        public DrinkRecipeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("GetIngredients")]
        public JsonResult GetIngredients()
        {
            string query = "select distinct ingredientName from dbo.drinkRecipes";
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