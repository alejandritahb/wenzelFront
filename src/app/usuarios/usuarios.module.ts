import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuUsuariosComponent } from './cu-usuarios/cu-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CuUsuariosComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports:[
    CuUsuariosComponent
  ]
})
export class UsuariosModule { }
