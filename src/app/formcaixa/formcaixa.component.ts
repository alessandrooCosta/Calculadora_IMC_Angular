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
  res: number = 0;



  constructor() { }

  ngOnInit(): void {
    this.res = this.peso;
  }

}
