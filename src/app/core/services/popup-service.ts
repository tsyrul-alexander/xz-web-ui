import {Injectable, TemplateRef} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/portal";

@Injectable()
export class PopupService {
	constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}
	public openDialog<T>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, data: any) {
		this.dialog.open(componentOrTemplateRef, {
			data: data
		});
	}
	public openSnackBar(message: string, caption: string = null) {
		this._snackBar.open(message, caption);
	}
}