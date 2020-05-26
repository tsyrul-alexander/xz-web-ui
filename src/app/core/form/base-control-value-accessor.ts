import {ControlValueAccessor} from "@angular/forms";
import {Injectable, Input} from "@angular/core";

@Injectable()
export class BaseControlValueAccessor<T> implements ControlValueAccessor {
	private _value: T;
	private propagateChangeFn: (_: any) => void;
	get value(): T {
		return this._value;
	}

	@Input('value')
	set value(value: T) {
		this._value = value;
		if (this.propagateChangeFn) {
			this.propagateChangeFn(value);
		}
	}


	registerOnChange(fn: any): void {
		this.propagateChangeFn = fn;
	}

	registerOnTouched(fn: any): void {
	}

	setDisabledState(isDisabled: boolean): void {
	}

	writeValue(value: any): void {
		if (value !== undefined) {
			this._value = value;
		}
	}
}