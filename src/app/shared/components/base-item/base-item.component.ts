import {EventEmitter, Injectable, Input, Output} from "@angular/core";
import {BaseObject} from "../../../core/models/data/base/base-object";

@Injectable()
export abstract class BaseItemComponent<T extends BaseObject> {
	@Input()public item: T;
}