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
  idade = "";
  res = "";
  textRed = false;
  textBlue = false;
  textres : any;
  
  calcImc(): string | number {
    let imc = 0;
    let res = "IMC: ";
    let gen = this.genero;
    let peso = this.peso;
    let alt = this.altura;
    let id = this.idade;
    let calc = peso / (alt * 2);
    this.res = res;
    this.imc = calc.toFixed(1);
    if(this.imc < 30.0){
      this.textRed = true;
      let textres = this.textres;
      this.textres = this.textRed;

    }else{
      this.textBlue = true;
      let textres = this.textres;
      this.textres = this.textBlue;
    }
    return this.imc;
  }

  constructor() { }

  ngOnInit(): void {
   
  }

}
