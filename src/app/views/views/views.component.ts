import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  stats = [
    {value: 22, label: 'Number of Users'},
    {value: 76345, label: 'Revenue'},
    {value: 900, label: 'Reviews'},
  ];
  items = [
    { image: '/assets/images/couch.jpeg', title: 'Couch', description: 'A great seat!'},
    { image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'A great chester drawers!'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
