import { Component } from '@angular/core';

import { TopMenu } from './components/scroll-component/scroll-component.component'

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

  handleTabSelected(tabMenu: TopMenu){
    console.log(tabMenu)
  }
 
}
