import { Component} from '@angular/core';
import { Usuarios } from './cu-usuarios.model';
import { FormControl, Validators, FormGroup, Form } from '@angular/forms';


@Component({
  selector: 'app-cu-usuarios',
  templateUrl: './cu-usuarios.component.html',
  styleUrls: ['./cu-usuarios.component.css']
})
export class CuUsuariosComponent {


  arreglousuario: Usuarios[] = [];


  grupoValidar = new FormGroup({
    nombrec: new FormControl('', [Validators.required]),
    fechac: new FormControl('',Validators.required),
    edadc: new FormControl('',[Validators.min(1),Validators.required, Validators.max(99)]),
    dirc: new FormControl('',Validators.required)
  });

  get nombrecc(){
    return this.grupoValidar.get('nombrec') as FormControl;
  }
  get fechacc(){
    return this.grupoValidar.get('fechac') as FormControl;
  }
  get edadcc(){
    return this.grupoValidar.get('edadc') as FormControl;
  }
  get dircc(){
    return this.grupoValidar.get('dirc') as FormControl;
  }

  miconsola(){
    console.log(this.grupoValidar.value);
  }
 
  nombrecEnt:string = "";
  fechacEnt:string="";
  edadcEnt:number =0;   
  dircEnt:string=""; 


  agregarUsuario(){
    let usuario1 = new Usuarios(this.nombrecEnt,this.fechacEnt,this.edadcEnt,this.dircEnt);
    this.arreglousuario.push(usuario1);
  }  
    
}
