import {Component, forwardRef, OnInit} from '@angular/core';
import {Country} from "../../../core/models/data/address/country";
import {Observable} from "rxjs";
import {BaseControlValueAccessor} from "../../../core/form/base-control-value-accessor";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {MOCK_COMPANY_LIST} from "../../../mock/mock-company";

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CountryListComponent),
    multi: true
  }]
})
export class CountryListComponent extends BaseControlValueAccessor<Country> implements OnInit {
  /*@Input() country: Country;
  @Output() countryChange: EventEmitter<Country> = new EventEmitter<Country>();*/
  public countries: Country[];
  private updateListFn: (value?: Country[]) => void;
  public searchValue: string;
  constructor() {
    super();
    //new Observable<Country[]>(subscriber => this.updateListFn = subscriber.next);
    this.countries = MOCK_COMPANY_LIST;
  }
  setCountry(country: Country) {
    this.value = country;
  }
  ngOnInit(): void {
  }

}
