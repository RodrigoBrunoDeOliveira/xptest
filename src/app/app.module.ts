import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonLinstService } from './services/pokemon-linst.service';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PokemonDataComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		routing
	],
	providers: [PokemonLinstService],
	bootstrap: [AppComponent]
})
export class AppModule { }
