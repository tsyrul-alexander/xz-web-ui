import {Injectable, TemplateRef} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/portal";
import {Observable} from "rxjs";

@Injectable()
export class ModalService {
	constructor(private dialog: MatDialog) {}
	public openModal<T, R>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, data) : Observable<R> {
		let d = this.dialog.open<T, R>(componentOrTemplateRef, {
			data
		});
		return d.afterClosed()
	}
}