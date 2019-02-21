import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { RespostaComponent } from './resposta/resposta.component';

const routes:Routes = [

  {
    path: '',
    redirectTo: `index`,
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: FormularioComponent,
    pathMatch: 'full'
  },
  {
    path: 'resposta',
    component: RespostaComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
