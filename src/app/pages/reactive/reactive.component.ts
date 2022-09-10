import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;


  constructor( private fb: FormBuilder) {
    this.createForm();
    this.loadDataToForm();
  }

  ngOnInit(): void {
  }
  get hobies(){
    return this.form.get('hobies') as FormArray
  }
  get nameNoValid(){
    return this.form.get('name')?.invalid && this.form.get('name')?.touched
  }
  get lastnameNoValid(){
    return this.form.get('lastname')?.invalid && this.form.get('lastname')?.touched
  }get emailNoValid(){
    return this.form.get('email')?.invalid && this.form.get('email')?.touched
  }
  get cityNoValid(){
    return this.form.get('adress.city')?.invalid && this.form.get('adress.city')?.touched
  }
  get estatelNoValid(){
    return this.form.get('adress.estate')?.invalid && this.form.get('adress.estate')?.touched
  }
  createForm(){
    this.form = this.fb.group({
      name:     ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email:    ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      adress: this.fb.group({
        city: ['', Validators.required],
        estate: ['', Validators.required],
      }),
      hobies: this.fb.array([])
    });
  }
  loadDataToForm(){
    this.form.reset({
      name: 'Mario',
      lastname: 'Hernández',
      email: 'tachidito_7inc@hotmail.com',
      adress: {
        city: 'Puebla',
        estate: 'Puebla',
      }
    })
  }
  addHobie(){
    this.hobies.push( this.fb.control(''))
  }
  deletHobie(i:number){
    this.hobies.removeAt(i);
  }
  save() {
    console.log(this.form)
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach( control => {
        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched());
        }else{
          control.markAllAsTouched();
        }
      });
  }
  this.form.reset({
    name: '',
  });
}
}
