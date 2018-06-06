import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';

@Injectable({
	providedIn: 'root'
})

/**
 * @name PokemonLinstService
 * @description classe responsavel pelos servicos de pokemon
 **/
export class PokemonLinstService {

	constructor(private http: HttpClient) { }

	/**
	 * @name getList
	 * @param {String} url url que contem a lista a ser chamada
	 * 
	 * @return {Object} Lista de pokemons
	 * @description metodo responsavel por retornar lista com os pokemons
	 **/
	getList(url: string): object {
		return this.http.get(url);
	}
}
