import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
  declarations: [PokemonCardComponent]
})
export class PokedexModule { }
