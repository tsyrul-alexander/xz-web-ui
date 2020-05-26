import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent {
  @Input()public header: string = "";
  close() {
    this.onClosed.emit();
  }
  @Output()onClosed = new EventEmitter();
}
