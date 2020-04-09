import { Component, OnInit } from '@angular/core';
import {BaseSectionComponent} from "../../../../shared/components/base-section/base-section.component";
import {User} from "../../../../core/models/data/user/user";
import {BaseUser} from "../../../../core/models/data/user/base-user";

@Component({
  selector: 'user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss']
})
export class UserSectionComponent extends BaseSectionComponent<BaseUser> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
