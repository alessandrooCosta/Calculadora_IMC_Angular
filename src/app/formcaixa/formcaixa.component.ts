import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formcaixa',
  templateUrl: './formcaixa.component.html',
  styleUrls: ['./formcaixa.component.css']
})
export class FormcaixaComponent implements OnInit {
  genero = "";
  peso : any; 
  altura = 0;
  res: any;
  
  calcImc(): number {
    let imc = 0;
    let gen = this.genero;
    let peso = this.peso;
    let alt = this.altura;
    imc = peso / (alt * 2);
    alert(imc);
    
    return imc;
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}
