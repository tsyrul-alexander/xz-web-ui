import {Guid} from "guid-typescript";
import {Company} from "../core/models/data/company/company";
import {Address} from "../core/models/data/address/address";
import {Country} from "../core/models/data/address/country";
import {City} from "../core/models/data/address/city";
import {BaseAddress} from "../core/models/data/address/base-address";

export const MOCK_COMPANY_LIST: Company[] = [{
	id: Guid.create(),
	name: "Company 1",
	iconUrl: ".\\asset\\image\\test\\google_icon.svg",
	category: {
		id: Guid.create(),
		name: "restaurant"
	},
	address: {
		id: Guid.create(),
		name: "",
		country: {
			id: Guid.create(),
			name: "country1"
		},
		building: "building1",
		city: {
			id: Guid.create(),
			name: "city1"
		},
		street: "street 1"
	},
	imageUrl: "https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png",
	owner: null
}, {
	id: Guid.create(),
	iconUrl: null,
	name: "Company 2",
	category: {
		id: Guid.create(),
		name: "restaurant"
	},
	address: new BaseAddress(Guid.create(), new Country(Guid.create(), "country1"), new City(Guid.create(), "city1"), "street 1", "building 2"),
	imageUrl: "",
	owner: null
}];