import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Recipes } from './components/recipes/recipes';

export const routes: Routes = [
    { path: ''         , component: Main    }, // Default route
    { path: 'recipes'  , component: Recipes }, // Recipes route
    { path: '**'       , redirectTo: ''     }  // Wildcard route to redirect to home
];
