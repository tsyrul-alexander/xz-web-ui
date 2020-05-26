import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {BaseControlValueAccessor} from "../../../core/form/base-control-value-accessor";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {CultureValueList} from "../../../core/models/data/culture/culture-value-list";
import {ModalService} from "../../../core/services/modal-service";
import {LczValueListModalComponent} from "../lcz-value-list-modal/lcz-value-list-modal.component";

@Component({
  selector: 'string-lcz-form-control',
  templateUrl: './string-lcz-form-control.component.html',
  styleUrls: ['./string-lcz-form-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StringLczFormControlComponent),
    multi: true
  }]
})
export class StringLczFormControlComponent extends BaseControlValueAccessor<CultureValueList> implements OnInit  {
  @Input() placeholder: string = "";
  @Input() caption: string = "";
  constructor(private modalService: ModalService) {
    super();
  }
  ngOnInit(): void {
  }
  openLcz() {
    this.modalService.openModal(LczValueListModalComponent, this.value).subscribe((value: CultureValueList) => {
      console.log(value)
    });
  }
  onDefValueChange(value: string) {
    this.value.DefValue = value;
  }
}
