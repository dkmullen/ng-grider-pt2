import { Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy, OnChanges {
  // Creates new event closeModal to be used on template along with click, etc
  @Output() closeModal = new EventEmitter();
  meNumber = 1;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // el.nativeElement is the host element of our component. We append
    // it to the body b/c a modal will be positioned relative to its containing
    // elements if it isn't attached to the body directly
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    // Removes modal (remove is a method on any dom element)
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.meNumber ++;
    this.closeModal.emit();
  }

  ngOnChanges() {
    console.log('Turn and face the strange...');
  }

}
