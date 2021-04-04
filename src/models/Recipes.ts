export interface Recipe {
  uuid: String;
  title: String;
  description: String;
  images: RecipeImage;
  servings: Number;
  prepTime: Number;
  cookTime: Number;
  postDate: Date;
  editDate: Date;
  ingredients: RecipeIngredient[];
  directions: RecipeDirection[];
}

interface RecipeImage {
  full: String;
  medium: String;
  small: String;
}

interface RecipeIngredient {
  uuid: String;
  amount: number;
  measurement: String;
  name: String;
}

interface RecipeDirection  {
  instructions: String;
  optional: Boolean;
}