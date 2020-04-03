export class BaseResponse {
	public fromServerObject(value: any) {
		Object.assign(this, value);
	}
}