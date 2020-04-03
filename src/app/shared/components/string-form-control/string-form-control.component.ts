import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {BaseControlValueAccessor} from "../../../core/form/base-control-value-accessor";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'string-form-control',
  templateUrl: './string-form-control.component.html',
  styleUrls: ['./string-form-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StringFormControlComponent),
    multi: true
  }]
})
export class StringFormControlComponent extends BaseControlValueAccessor<string> implements OnInit {
  @Input() placeholder: string = "";
  @Input() caption: string = "";
  ngOnInit(): void {
  }
}
