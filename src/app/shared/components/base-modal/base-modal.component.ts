import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
//Injectable # 35367
@Component ({selector: 'base-modal', template: 'no-ui'})
export class BaseModalComponent<T> {
  setDialogData: (data: any) => void;
  constructor(public dialogRef: MatDialogRef<T>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  close(result: any = null) {
    this.dialogRef.close(result);
  }
}
