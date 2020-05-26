import {BaseObject} from "../base/base-object";
import {Guid} from "guid-typescript";

export class CultureValue extends BaseObject {
	public CultureId: Guid;
	public Value: string;
}