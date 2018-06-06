import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PokemonLinstService } from './../services/pokemon-linst.service';

interface myList {
	obj: Object
}

@Component({
	selector: 'app-pokemon-data',
	templateUrl: './pokemon-data.component.html',
	styleUrls: ['./pokemon-data.component.scss']
})

/**
 * @name PokemonDataComponent
 * @description component responsavel pelo detalhamento do pokemon desejado
 */
export class PokemonDataComponent implements OnInit {

	pokeUrl: string;
	pokemon: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private pokemonLinstService: PokemonLinstService,
		private router: Router
	) {
		this.activatedRoute.queryParams.subscribe( queryParams => this.pokeUrl = queryParams );
	}

	ngOnInit() {
		this.getPokemonList(this.pokeUrl.pokemonData);
	}

	/**
	 * @name back
	 * @description metodo responsavel por voltar a home
	 **/
	back() {
		this.router.navigate(['']);
	}

	/**
	 * @name getPokemonList
	 * @param {String} url endpoint com a lista desejada
	 * @description chama o servico com a lista dos pokemons e popula a lista de pokemons
	 **/
	getPokemonList(url: string) {
		this.pokemon = this.pokemonLinstService.getList(url).subscribe(data => {
			this.pokemon = data;
		});
	}
}
