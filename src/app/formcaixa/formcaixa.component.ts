import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formcaixa',
  templateUrl: './formcaixa.component.html',
  styleUrls: ['./formcaixa.component.css']
})
export class FormcaixaComponent implements OnInit {
  imc: any;
  genero = "";
  peso: any;
  altura: any;
  idade = "";
  res = "";
  textres = "";

  calcImc(): string | number | any{
    let imc = 0;
    let res = "IMC: ";
    let gen = this.genero;
    let peso = this.peso;
    let alt = this.altura;
    let id = this.idade;
    let calc = peso / (alt * 2);
    this.res = res;
    this.imc = calc.toFixed(1);
      if (this.imc < 18.5) {
        let resultado = "Abaixo do peso";
        this.textres = resultado;
        return  this.textres;
      } else if (this.imc == 18.5 || this.imc < 24.9) {
        let resultado = "Peso Normal";
        this.textres = resultado;
        return  this.textres;
      } else if (this.imc == 25.0 || this.imc < 29.9) {
        let resultado = "Excesso de Peso";
        this.textres = resultado;
        return  this.textres;
      } else if (this.imc == 30.0 || this.imc < 34.9) {
        let resultado = "Obsidade de Classe 1";
        this.textres = resultado;
        return  this.textres;
      } else if (this.imc == 35.0 || this.imc < 39.9) {
        let resultado = "Obsidade de Classe 2";
        this.textres = resultado;
        return  this.textres;
      } else if (this.imc >= 40.0) {
        let resultado = "Obsidade de Classe 3";
        this.textres = resultado;
        return  this.textres;
    }
    return this.imc;
  }

  get(): "#87CEEB" | "#3CB371" | "#FFFF00" | "#FFA500" | "#FF4500" | "#FF0000" | any{
    if(this.idade == 'idade1'){
      if (this.imc < 18.5) {
        return '#87CEEB'
      } else if (this.imc == 18.5 || this.imc < 24.9) {
        return '#3CB371'
      } else if (this.imc == 25.0 || this.imc < 29.9) {
        return "#FFFF00"
      } else if (this.imc == 30.0 || this.imc < 34.9) {
        return "#FFA500"
      } else if (this.imc == 35.0 || this.imc < 39.9) {
        return "#FF4500"
      } else if (this.imc >= 40.0) {
        return "#FF0000"
      }
    }else{
      if (this.imc <= 22.0) {
        return "#FFFF00"
    } else if (this.imc > 22.0 && this.imc < 27.0) {
      return "#FFA500"
    } else if (this.imc > 27.0) {
      return "#FF0000"
    }
    }
  }


  constructor() { }

  ngOnInit(): void {

  }

}
