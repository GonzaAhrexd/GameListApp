import { Component } from '@angular/core';
import { getGames } from '../../api/games.service';
@Component({
  selector: 'GameList',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  // styleUrl: './game-list.component.css'
})
export class GameListComponent {
  gameList:any = []

  constructor(){
    this.fetchGames()
  }

    async fetchGames(){
      this.gameList = await getGames()
  }
}
