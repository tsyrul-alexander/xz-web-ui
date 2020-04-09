import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SectionRange} from "../../../core/models/view/section-range";

@Component({
  selector: 'section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss']
})
export class SectionViewComponent implements OnInit {
  @Input()public length: number = 100;
  @Output()rangeChange: EventEmitter<SectionRange> = new EventEmitter<SectionRange>();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor() { }
  pageChange(pageIndex: number, pageSize: number, pageLength: number) {
    let start = (pageSize * pageIndex) + 1;
    let end = (pageSize * pageIndex) + pageSize;
    this.setRange(start, end);
  }
  setRange(start: number, end: number) {
    this.rangeChange.emit(new SectionRange(start, end));
  }
  ngOnInit(): void {
  }

}
