import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formcaixa',
  templateUrl: './formcaixa.component.html',
  styleUrls: ['./formcaixa.component.css']
})
export class FormcaixaComponent implements OnInit {
  imc : any;
  genero = "";
  peso : any; 
  altura : any;
  idade1 = 0;
  idade2 = 0;
  //res: any;
  
  calcImc(): number {
    let imc = 0;
    let gen = this.genero;
    let peso = this.peso;
    let alt = this.altura;
    this.imc = peso / (alt * 2);
    return this.imc;
  }

  constructor() { }

  ngOnInit(): void {
   
  }

}
