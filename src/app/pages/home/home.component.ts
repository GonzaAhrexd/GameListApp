import { Component } from '@angular/core';
import { AgregarJuegoComponent } from '../../components/agregar-juego/agregar-juego.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AgregarJuegoComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  showAddGame = false

  addGame(){
    this.showAddGame = true
  }
}
