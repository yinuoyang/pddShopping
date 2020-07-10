import { Component, OnInit } from '@angular/core';

interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scroll-component',
  templateUrl: './scroll-component.component.html',
  styleUrls: ['./scroll-component.component.css']
})

export class ScrollComponentComponent implements OnInit {

  menus: TopMenu[] = [
    { title: 'Featured', link: '' },
    { title: "Men's suit", link: '' },
    { title: 'Mobile Phone', link: '' },
    { title: 'Women suit', link: '' },
    { title: 'Toys', link: '' },
    { title: 'Games', link: '' },
    { title: 'Bang!', link: '' },
  ];

  selectIndex = -1;

  constructor() {}

  ngOnInit(): void {
  }

}
