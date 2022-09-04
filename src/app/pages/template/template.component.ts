import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  user = {
    name: 'Mario',
    lastname: 'Hernández',
    email: 'tachidito_7inc@hotmail.com',
    pais: 'MEX',
    genero: 'M'
  }
  paises: any[]=[];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre:'Seleccione un pais',
        codigo: ''
      })
      console.log( paises );
    });
  }
  save( form: NgForm ){
    console.log(form);
    if(form.invalid){
      Object.values(form.controls).forEach( control => {
        control.markAllAsTouched();
      })
      return;
    }
    console.log(form.value);
  }
}
