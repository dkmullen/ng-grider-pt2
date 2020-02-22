import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'What is up?', content: 'The opposit of down...'},
    { title: 'Lorem ipsum?', content: 'Touche...'},
    { title: 'A discourse on...', content: '...the meaning of life'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
