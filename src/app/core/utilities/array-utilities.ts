export class ArrayUtilities {
	public static where(array: any[], searchObject: any): any {
		let keys = Object.keys(searchObject);
		return array.filter(item => keys.every(key => searchObject.hasOwnProperty(key) &&
			item[key] === searchObject[key]));
	}
	public static join(arr: string[], separator: string = " ", removeEmptyItems: boolean = true): string {
		if (removeEmptyItems) {
			arr = arr.filter(value => value && value != "");
		}
		return arr.join(separator);
	}
}