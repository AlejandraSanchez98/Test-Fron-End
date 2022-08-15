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

  public imagePokemon: string;
  public namePokemon: string;
  constructor(private ApiPokemon:ApiPokemonService, private route:ActivatedRoute, private router: Router) { 
    this.imagePokemon = "";
    this.namePokemon = "";
  }


  /**
  * @description: We consume the web service to get the name of the Pokémon and store the result in an array of objects.
  * @author: Alejandra Sanchez - 2022/08/13
  */
   public getImagePokemon(): void {
    let namePokemon: string;
    //get name from URL parameters
    this.route.queryParams.subscribe((params)=>{
      namePokemon = params['name'];

      this.ApiPokemon.getImagePokemon(namePokemon).subscribe({
        next: (success:any) => {
        console.log("success imagen",success.sprites.front_default);  
        this.namePokemon = namePokemon;
        this.imagePokemon = success.sprites.front_default;
        console.log("imagePokemon", this.imagePokemon);
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
    this.getImagePokemon();
  }

}
