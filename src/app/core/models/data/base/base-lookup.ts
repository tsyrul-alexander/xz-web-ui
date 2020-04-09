import {BaseObject} from "./base-object";
import {Guid} from "guid-typescript";

export class BaseLookup extends BaseObject {
	constructor(id: Guid = null, public name: string = null) {
		super(id);
	}

}