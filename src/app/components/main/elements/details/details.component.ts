import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from "../../../../services/api-pokemon.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pokemonImage: string;
  public pokemonName: string;
  public pokemonAbilityArray:any[];
  constructor(private ApiPokemon:ApiPokemonService, private route:ActivatedRoute, private router: Router) { 
    this.pokemonImage = "";
    this.pokemonName = "";
    this.pokemonAbilityArray = [];
  }


  /**
  * @description: We consume the web service to get the name of the Pokémon and store the result in an array of objects.
  * @author: Alejandra Sanchez - 2022/08/13
  */
   public getPokemonImage(): void {
    let pokemonName: string;
    //get name from URL parameters
    this.route.queryParams.subscribe((params)=>{
      pokemonName = params['name'];

      this.ApiPokemon.getPokemonImageWs(pokemonName).subscribe({
        next: (success:any) => {
        console.log("success imagen",success.sprites.front_default);  
        this.pokemonName = pokemonName;
        this.pokemonImage = success.sprites.front_default;
        console.log("imagePokemon", this.pokemonImage);
      },
        error: (error) => { 
          console.error(error)
        }
      });
    });    
  }


  /**
  * @description: We consume the web service to get the name of the Pokémon and store the result in an array of objects.
  * @author: Alejandra Sanchez - 2022/08/13
  */
   public getPokemonAbility(): void {
    let namePokemon: string;
    //get name from URL parameters
    this.route.queryParams.subscribe((params)=>{
      namePokemon = params['name'];

      this.ApiPokemon.getPokemonAbilityWs(namePokemon).subscribe({
        next: (success:any) => {
        console.log("success habilidad",success.abilities);  
        this.pokemonAbilityArray = success.abilities;
      },
        error: (error) => { 
          console.error(error)
        }
      });
    });    
  }


  /**
  *@description: See another pokemon
  * @author: Alejandra Sanchez - 2022/08/13
  */
  public chooseAnotherPokemon() {
    this.router.navigate(['/list']);
  }

  ngOnInit(): void {
    this.getPokemonImage();
    this.getPokemonAbility();
  }

}
