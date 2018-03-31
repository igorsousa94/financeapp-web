import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPesquisaComponent } from './usuario-pesquisa/usuario-pesquisa.component';
import { UsuarioFormComponent } from 'app/usuario/usuario-form/usuario-form.component';

const usuariosRoutes: Routes = [

  {path: '', component: UsuarioPesquisaComponent},
  {path: 'novo', component: UsuarioFormComponent, data:{title: 'Cadastro de Usuário'}}

];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}
