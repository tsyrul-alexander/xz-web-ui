import {BaseUser} from "./base-user";
import {BaseAddress} from "../address/base-address";
import {UserRole} from "./user-role";

export class User extends BaseUser {
	public address: BaseAddress;
	public roles: UserRole[];

}