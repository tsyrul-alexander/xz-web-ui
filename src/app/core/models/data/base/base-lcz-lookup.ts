import {BaseObject} from "./base-object";
import {CultureValueList} from "../culture/culture-value-list";
import {Guid} from "guid-typescript";

export class BaseLczLookup extends BaseObject {
	public Name: CultureValueList;
	constructor(id: Guid = Guid.create(), name: CultureValueList = new CultureValueList()) {
		super(id);
		this.Name = name;
	}
}