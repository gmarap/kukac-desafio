import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  mensagem: any;
  mostraMensagem:boolean = false;
  
  formulario = {
    nome: null,
    cep: null,
    renda: null,
    dependentes: null
  }

  constructor(
    private router: Router,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
  }

  enviaFormulario(dados) { //INFORMAÇÕES DE ANÁLISES

    if (dados.cep == "" || dados.cep == null) {
      this.mostraMensagem = true;
      this.mensagem = "CEP não pode ser vazio!";
    }

    else if (dados.renda == "" || dados.renda == null) {
      this.mostraMensagem = true;
      this.mensagem = "Renda Mensal não pode ser vazio!";
    }

    else if (dados.dependentes == "" || dados.dependentes == null) {
      this.mostraMensagem = true;
      this.mensagem = "Dependentes não pode ser vazio!";
    }

    else {
      
      this.formularioService.enviaForm(dados)
      .subscribe(
        data => {
          localStorage.setItem("valoresRecebidos", JSON.stringify(data));
          this.router.navigate(["resposta"]);
        },
        err => {
          this.mostraMensagem = true;
          this.mensagem = "Erro na inserção dos dados";
        }
      );

    }

  }

}
