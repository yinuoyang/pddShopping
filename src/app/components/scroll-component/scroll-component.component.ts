import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scroll-component',
  templateUrl: './scroll-component.component.html',
  styleUrls: ['./scroll-component.component.css']
})

export class ScrollComponentComponent implements OnInit {

  @Input() menus: TopMenu[] = [];
  @Output() tabSelector = new EventEmitter();
  selectIndex = -1;
  tabSelected = -1;
  @Input() backgroundColor='#fff';
  @Input() underlineColor = 'yellow';
  @Input() titleActiveColor = 'blue';
  @Input() titleColor = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  handleSelection(index: number) {
    this.selectIndex = index;
    this.tabSelected = this.selectIndex;
  }

}
