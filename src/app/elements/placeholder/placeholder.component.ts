import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true; // Can set to false here or in parent
  @Input() lines = 7; // Adjust here or in parent

  constructor() { }

  ngOnInit() {
  }

}
