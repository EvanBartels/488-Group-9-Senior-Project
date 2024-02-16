using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;

namespace CSCD490SeniorProjectApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Drink> Drinks => Set<Drink>();
    }
}
