import { Component } from '@angular/core';
import { AgregarJuegoComponent } from '../../components/agregar-juego/agregar-juego.component'
import { GameListComponent } from '../../components/game-list/game-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AgregarJuegoComponent, GameListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  showAddGame = false

  addGame(){
    this.showAddGame = true
  }
}
