import {Registration} from "../registration";

export class RegistrationRequest {
	public login: string;
	public password: string;
	public name: string;
	constructor(req: Registration) {
		this.login = req.name;
		this.password = req.password;
		this.name = req.name;
	}
}