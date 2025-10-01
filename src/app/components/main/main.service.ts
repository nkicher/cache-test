import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    public payload = {};
    private PATH = "https://kicherops.com/app/data/recipe/";

    constructor(
          public httpClient: HttpClient
    ) { }

    getRecipes() {
        let url = this.PATH + "recipes.php";
        return this.httpClient.get(url)
            .pipe(map((resp: any) => {
                return resp;
            }));
    }
}
