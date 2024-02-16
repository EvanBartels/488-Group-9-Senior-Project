namespace CSCD490SeniorProjectApi.Data
{
    public class Drink
    {
        public int Id { get; set; }
        public required string DrinkName { get; set; }
        public int ratio { get; set; }
        public required string ingredientName { get; set; }
        public int abv { get; set; }

    }
}
