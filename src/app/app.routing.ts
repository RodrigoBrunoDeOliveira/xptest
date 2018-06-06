import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { HomeComponent } from './home/home.component';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';

const APP_ROUTES: Routes = [
    { component: HomeComponent, path: ''},
    { component: PokemonDataComponent, path: 'pokemon'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
