export interface Recipe {
    _id: string;
    name: string;
    instructions: string;
    ingredients: string[];
    store: string;
}

export interface Ingredient {
    name: string;
    checked: boolean;
}