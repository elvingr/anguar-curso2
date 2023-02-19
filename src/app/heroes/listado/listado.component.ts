import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})



export class ListadoComponent  {
heroes:string[] =['Spiderman','Ironman','Hulk',
'Mujer maravilla','Capitan America'];

heroeBorrado:string[] =[];
condicion:boolean=false;



borrar(){
  this.heroeBorrado.push(this.heroes.shift() || '');  
}

agregar(){

}

}
