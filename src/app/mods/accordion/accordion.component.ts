import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openedItemIndex = 0;

  constructor() { }

  ngOnInit() {}

  onClick(index: number) {
    index === this.openedItemIndex ? this.openedItemIndex = -1 : this.openedItemIndex = index;
  }

}
