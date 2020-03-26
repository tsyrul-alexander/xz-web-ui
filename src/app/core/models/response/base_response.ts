export class BaseResponse {
	success: boolean;
	error: Error;

	public fromServerObject(value: any) {
		Object.assign(this, value);
	}
}