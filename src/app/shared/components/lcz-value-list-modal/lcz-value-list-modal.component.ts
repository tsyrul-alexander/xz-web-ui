import { Component } from '@angular/core';
import {BaseModalComponent} from "../base-modal/base-modal.component";

@Component({
  selector: 'lcz-value-list-modal',
  templateUrl: './lcz-value-list-modal.component.html',
  styleUrls: ['./lcz-value-list-modal.component.scss']
})
export class LczValueListModalComponent extends BaseModalComponent<LczValueListModalComponent> {
  /*constructor() {
    super(null, null);
  }*/
}
