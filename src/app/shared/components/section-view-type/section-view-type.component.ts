import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SectionViewType} from "../../../core/models/view/section-view-type";

class ViewTypeItem {
  constructor(public key: string, public viewType: SectionViewType) {

  }
}

@Component({
  selector: 'section-view-type',
  templateUrl: './section-view-type.component.html',
  styleUrls: ['./section-view-type.component.scss']
})
export class SectionViewTypeComponent implements OnInit {
  @Input()viewType: SectionViewType;
  @Output()viewTypeChange: EventEmitter<SectionViewType> = new EventEmitter<SectionViewType>();
  public viewTypes: ViewTypeItem[] = [];
  constructor() {
    this.viewTypes.push(new ViewTypeItem("tile", SectionViewType.Tile));
    this.viewTypes.push(new ViewTypeItem("list", SectionViewType.List));
  }
  setViewType(viewType: SectionViewType) {
    this.viewType = viewType;
    this.viewTypeChange.emit(viewType);
  }
  ngOnInit(): void {
  }
}
