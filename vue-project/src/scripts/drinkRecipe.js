export class DrinkRecipe {
    constructor(drinkName, ingredients, abv = 0)
    {
        this.drinkName = drinkName;
        this.ingredients = ingredients;
        this.abv = abv;
    }
}