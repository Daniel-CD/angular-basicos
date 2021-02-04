import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado:string = '';
  // heroesBorrados:string[] = [];

  borrarHeroe(){
    /* this.heroeBorrado = this.heroes.shift()!; */
    this.heroeBorrado = this.heroes.shift() || '';
    /* console.log(heroeBorrado); */
    //console.log(heroeBorrado);
   // this.heroesBorrados.push(heroeBorrado);
  }
}
