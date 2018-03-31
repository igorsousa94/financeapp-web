import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioPesquisaComponent } from './usuario-pesquisa/usuario-pesquisa.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  declarations: [
    UsuarioFormComponent,
    UsuarioPesquisaComponent
  ],
  exports:[]
})
export class UsuarioModule { }
