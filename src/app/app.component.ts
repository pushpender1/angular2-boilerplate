import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`
})
export class AppComponent  { title = 'Tour of Heroes';
  hero = 'Windstorm'; }
