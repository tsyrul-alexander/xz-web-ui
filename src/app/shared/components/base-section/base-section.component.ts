import {Injectable} from "@angular/core";
import {SectionViewType} from "../../../core/models/view/section-view-type";

@Injectable()
export abstract class BaseSectionComponent<T> {
	public items: T[] = [];
}