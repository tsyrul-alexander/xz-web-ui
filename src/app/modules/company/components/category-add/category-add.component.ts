import { Component, OnInit } from '@angular/core';
import {AddCategory} from "../../../../core/models/data/company/category/add-category";

@Component({
  selector: 'category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  public Category: AddCategory = new AddCategory();
  constructor() { }

  ngOnInit(): void {
  }

}
