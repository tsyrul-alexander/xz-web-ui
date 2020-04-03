import {Component, forwardRef, OnInit} from '@angular/core';
import {StringFormControlComponent} from "../string-form-control/string-form-control.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'password-form-control',
  templateUrl: './password-form-control.component.html',
  styleUrls: ['./password-form-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordFormControlComponent),
    multi: true
  }]
})
export class PasswordFormControlComponent extends StringFormControlComponent implements OnInit {

  ngOnInit(): void {
  }

}
