import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hydrate',
  imports: [],
  templateUrl: './hydrate.component.html',
  styleUrl: './hydrate.component.scss'
})
export class HydrateComponent {
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
 constructor(){
  if(this.isBrowser) localStorage.setItem('key', 'test')
 }
}
