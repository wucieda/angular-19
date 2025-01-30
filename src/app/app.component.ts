import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { HydrateComponent } from './hydrate/hydrate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HydrateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19';
  options = signal(['manzana', 'banana','frutilla']);
  upperCaseOptions = computed(()=>this.options().map((o)=>o.toUpperCase()));
  choise = linkedSignal(()=>this.options()[0]);
}
