import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-target',
  templateUrl: './hero-target.component.html'
})
export class HeroTargetComponent implements OnInit {
  
  /*Estas propiedades son las que vienen desde otro componente, 
  para hacer reutizable el codigo de las cards*/
  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroSelected: EventEmitter<number>;

  constructor(private router: Router) { 
    this.heroSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['/heroe', this.index]);
    //this.heroSelected.emit(this.index); //Uso con @Output()
  }

}
