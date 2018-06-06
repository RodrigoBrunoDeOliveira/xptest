import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonLinstService } from './../services/pokemon-linst.service';

interface myList {
	obj: Object
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

/**
 * @name HomeComponent
 * @description component responsavel pela listagem dos pokemons
 */
export class HomeComponent implements OnInit {

	constructor(
		private pokemonLinstService: PokemonLinstService,
		private router: Router
	) { }

	check: any = {
		back: false,
		next: false
	};
	list: any;

	ngOnInit() {
		this.getPokemonList('https://pokeapi.co/api/v2/pokemon/');
	}

	/**
	 * @name backPage
	 * @description metodo responsavel por voltar uma pagina
	 **/
	backPage() {
		if(this.list.previous) this.getPokemonList(this.list.previous);
	}

	/**
	 * @name getPokemon
	 * @param {String} pokemonData endpoint com o pokemon desejado
	 * @description navega para a view com os dados do pokemon
	 **/
	getPokemon(pokemonData: string) {
		this.router.navigate(['pokemon'], {queryParams: {pokemonData}});
	}

	/**
	 * @name getPokemonList
	 * @param {String} url endpoint com a lista desejada
	 * @description chama o servico com a lista dos pokemons e popula a lista de pokemons
	 **/
	getPokemonList(url: string) {
		this.list = this.pokemonLinstService.getList(url).subscribe(data => {
			this.list = data;
		});
	}

	/**
	 * @name nextPage
	 * @description metodo responsavel para carregar a proxima pagina
	 **/
	nextPage() {
		if(this.list.next) this.getPokemonList(this.list.next);
	}
}
