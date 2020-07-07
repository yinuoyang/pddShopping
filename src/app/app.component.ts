import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link?: string;
}

interface AddFunc {
  (x: number, y: number): number;
}

interface Dict {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pddShopping';
  menus: TopMenu[] = [
    { title: 'Featured', link: '' },
    { title: "Men's suit", link: '' },
    { title: 'Mobile Phone', link: '' },
    { title: 'Women suit', link: '' },
    { title: 'Toys', link: '' },
    { title: 'Games', link: '' },
    { title: 'Bang!', link: '' },
  ];

  add: AddFunc = (x, y) => x + y;
  selectIndex = -1;
}
