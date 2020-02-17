import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {
  @Input() items = [];

  constructor() { }

  ngOnInit() {
  }

}
