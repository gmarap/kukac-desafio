import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.scss']
})
export class RespostaComponent implements OnInit {

  dadosRecebidos:any;

  constructor() { }

  ngOnInit() {
    this.dadosRecebidos = JSON.parse(localStorage.getItem("valoresRecebidos"));
  }

}
