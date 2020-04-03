import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {BaseControlValueAccessor} from "../../../core/form/base-control-value-accessor";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['./checkbox-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxControlComponent),
    multi: true
  }]
})
export class CheckboxControlComponent extends BaseControlValueAccessor<boolean> implements OnInit {
  @Input() caption: string = "";
  ngOnInit(): void {
  }
}
