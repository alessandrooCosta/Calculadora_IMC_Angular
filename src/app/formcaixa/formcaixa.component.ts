import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formcaixa',
  templateUrl: './formcaixa.component.html',
  styleUrls: ['./formcaixa.component.css']
})
export class FormcaixaComponent implements OnInit {
  genero = "";
  peso : any; 
  altura: any;
  res: any;
  
  calcImc(): number {
    let imc = 0;
    let gen = this.genero;
    let peso = this.peso;
    let alt = this.altura;
    this.imc = peso / (altura * 2);
    alert(this.imc);
    
    return this.imc;
  }

  constructor() { }

  ngOnInit(): void {
  
  }

}
