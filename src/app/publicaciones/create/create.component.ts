import { Validator } from '@angular/forms';
import { Publicaciones } from './../../models/Publicaciones';

import { PublicacionesModule } from './../../Publicaciones/Publicaciones.module';
import { Component, OnInit } from '@angular/core';
import { createComponent } from '@angular/compiler/src/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],



})
export class CreateComponent implements OnInit {
private Publicaciones: PublicacionesModule;
// tslint:disable-next-line:no-inferrable-types
private isValid: boolean = true;
// tslint:disable-next-line:no-inferrable-types
private message: string = '';
  create: any;
  constructor( ) {

   }

  ngOnInit() {
   }
public AceptarOrUpdate(): void {

}

 }
