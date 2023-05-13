import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })

export class RecipeService {
    recipes: any[] = [];

    constructor(private readonly http: HttpClient) {}

    public async getRecipes(): Promise<any> {
        return this.http.get(`${environment}/recipes`).toPromise();
    }
}
