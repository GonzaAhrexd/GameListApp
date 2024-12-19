import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addGame } from '../../api/games.service';

type game = {
  nombre: string
  fecha_de_salida: Date
  imagen: string
  categoria: string
}

@Component({
  selector: 'AgregarJuego',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-juego.component.html',
})

export class AgregarJuegoComponent {
  valores = {}
  form = signal<FormGroup>(
    new FormGroup(
      {
        nombre: new FormControl('', [Validators.required]),
        fecha_de_salida: new FormControl('', [Validators.required]),
        imagen: new FormControl('', [Validators.required]),
        categoria: new FormControl('', [Validators.required]),
      })
    )


  async agregarJuego(){
    console.log(this.form().valid)
    // Muestra todo lo enviado en el formulario
    if (this.form().valid) {
      this.valores = this.form().value;
      // @ts-ignore
      this.valores.fecha_de_salida = new Date(this.form().value.fecha_de_salida);
      
      await addGame(this.valores as game)
      // console.log(this.valores);
    }}

}
