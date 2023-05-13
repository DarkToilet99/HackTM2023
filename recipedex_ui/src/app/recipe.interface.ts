export interface Recipe {
    id: string;
    name: string;
    description: string;
    ingredients: Ingredient[];
    store: string;
}

export interface Ingredient {
    name: string;
    checked: boolean;
}