import {BaseLookup} from "../base/base-lookup";
import {BaseUser} from "../user/base-user";
import {BaseAddress} from "../address/base-address";
import {Address} from "../address/address";
import {Category} from "./category";

export class BaseCompany extends BaseLookup {
	public iconUrl: string;
	public imageUrl: string;
	public address: BaseAddress;
	public owner: BaseUser;
	public category: Category;
}