import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from "../../../../services/api-pokemon.service";
import { IPokemon } from "../../../../models/pokemon";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public pokemoArray:any[];

  constructor(private ApiPokemon:ApiPokemonService, private router: Router) {
    this.pokemoArray = [];
  }

  /**
  * @description: We consume the web service to get the name of the Pokémon and store the result in an array of objects.
  * @author: Alejandra Sanchez - 2022/08/13
  */
   public getNamePokemon(): void{
    this.ApiPokemon.getNamePokemon().subscribe({
      next: (success:any) => {
      console.log("success",success);  
      this.pokemoArray = success.results;
      console.log(this.pokemoArray);
    },
      error: (error) => { 
        console.error(error)
      }
    });
  }


  /**
  * @description: Show details of the Pokémon
  * @author: Alejandra Sanchez - 2022/08/13
  */
  public detailsPokemon(name:string):void {
    this.router.navigate(['/details'], {queryParams:{name:name}});
  }

    


  ngOnInit(): void {
    this.getNamePokemon();
  }
}
