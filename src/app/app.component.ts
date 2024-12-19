import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <main  >
  <!-- <Navbar nombre="Gonza" /> -->
    <router-outlet />
  <!-- <probando /> -->
  </main>
  `,
  // templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'GamesUI';
}
