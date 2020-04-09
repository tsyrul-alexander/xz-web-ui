import {Country} from "./country";
import {City} from "./city";
import {BaseObject} from "../base/base-object";
import {ArrayUtilities} from "../../../utilities/array-utilities";
import {Guid} from "guid-typescript";
export class BaseAddress extends BaseObject {
	public get name(): string {
		let displayValues = [
			this.country && this.country.name,
			this.city && this.city.name,
			this.street,
			this.building
		];
		return ArrayUtilities.join(displayValues, " ", true);
	}
	public set name(value: string) {
		//ignore
	}
	constructor(id: Guid = null, public country: Country = null, public city: City = null, public street: string = null, public building: string = null) {
		super(id);
	}
}