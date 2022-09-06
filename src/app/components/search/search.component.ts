import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService} from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  name: string;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.findHeroByName();
  }

  findHeroByName(){
   this.activatedRoute.params.subscribe( params => {
      this.name = params['name'];
      this.heroes = this.heroesService.findHeroByName(params['name']);
   })
  }

}
