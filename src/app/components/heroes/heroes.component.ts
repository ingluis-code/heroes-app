import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

/*Para redireccionar a la pagina de detalles de un heroe*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroes = this.heroesService.getHeroes();
  }

  //Este metodo es llamado desde el componente hero-target
  verHeroe(id: number): void {
     this.router.navigate(['/heroe', id]);
  }
  
}
