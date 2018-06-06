import { TestBed, inject } from '@angular/core/testing';

import { PokemonLinstService } from './pokemon-linst.service';

describe('PokemonLinstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonLinstService]
    });
  });

  it('should be created', inject([PokemonLinstService], (service: PokemonLinstService) => {
    expect(service).toBeTruthy();
  }));
});
