
import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h3>La Base es: <strong>{{base}}</strong></h3>



    <button (click)="acumular(-base)" >-{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(base)">+{{base}}</button>

    `
})


export class ContadorComponent{
    public titulo: string = 'Contador App';
    numero:number = 10;
    base  :number = 5;
  
    acumular(valor:number){
      if(this.numero>=0 && valor >0){
        this.numero+=valor;
      }
      else if(this.numero>0 && valor <0){
        this.numero+=valor;
      }
    }
}