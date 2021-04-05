export interface Recipe {
  uuid: string;
  title: string;
  description: string;
  images: RecipeImage;
  servings: number;
  prepTime: number;
  cookTime: number;
  postDate: Date;
  editDate: Date;
  ingredients: RecipeIngredient[];
  directions: RecipeDirection[];
}

interface RecipeImage {
  full: string;
  medium: string;
  small: string;
}

export interface RecipeIngredient {
  uuid: string;
  amount: number;
  measurement: string;
  name: string;
}

interface RecipeDirection  {
  instructions: string;
  optional: Boolean;
}