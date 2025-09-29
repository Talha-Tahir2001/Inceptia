import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { providePrimeNG } from 'primeng/config';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Header, Footer],
  templateUrl: './app.html',
  styles: [],
})
export class App {
 
  protected readonly title = signal('Inceptia');
}
