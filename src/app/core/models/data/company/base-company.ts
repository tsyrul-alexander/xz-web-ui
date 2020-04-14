import {BaseLookup} from "../base/base-lookup";
import {BaseUser} from "../user/base-user";
import {BaseAddress} from "../address/base-address";
import {Address} from "../address/address";
import {Category} from "./category";
import {Image} from "../image/image";

export class BaseCompany extends BaseLookup {
	public icon: Image;
	public address: BaseAddress;
	public owner: BaseUser;
	public category: Category;
}