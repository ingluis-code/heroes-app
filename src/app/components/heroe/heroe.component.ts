import { Component} from '@angular/core';
/*Obtener el id del heroe a mostrar */
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  
  heroe: any = {};

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { 
     this.findHeroe();
  }

  findHeroe(){
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.findHeroById(params['id']);
    })
  }
  


 



 
}
