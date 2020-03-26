import {Observable} from "rxjs";
import {map, mergeAll} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {BaseResponse} from "../models/response/base_response";

@Injectable()
export abstract class BaseHttpService {
	castObject<T extends BaseResponse>(observable: Observable<any>, type: {new(): T}): Observable<T> {
		return observable.pipe(map(value => this.mapObjects([value], type)), mergeAll<T>());
	}
	castObjects<T extends BaseResponse>(observable: Observable<any>, type: {new(): T}): Observable<T[]> {
		return observable.pipe(map(value => this.mapObjects(value, type)));
	}
	mapObjects<T extends BaseResponse>(data: any[], type: {new(): T}): T[] {
		return  data.map<T>(dataItem => {
			let obj = new type();
			obj.fromServerObject(dataItem);
			return obj;
		}, this);
	}
}