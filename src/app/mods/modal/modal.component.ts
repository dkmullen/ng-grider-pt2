import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // el.nativeElement is the host element of our component. We append
    // it to the body b/c a modal will be positioned relative to its containing
    // elements if it isn't attached to the body directly
    document.body.appendChild(this.el.nativeElement);
  }

}
