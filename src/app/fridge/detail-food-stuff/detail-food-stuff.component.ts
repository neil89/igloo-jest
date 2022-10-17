import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import {
  FoodExpirationTypeModel,
  FoodGroupModel,
  FoodStoragePlaceModel,
  FoodStuffExpandedModel
} from 'src/app/models/food.model';
import { DetailFoodForm } from 'src/app/models/forms.model';
import {
  FoodCollectionsActions,
  FridgeActions,
  selectFoodExpirationTypes,
  selectFoodGroups,
  selectFoodStoragePlaces
} from '../store';


@Component({
  selector: 'app-detail-food-stuff',
  templateUrl: './detail-food-stuff.component.html',
  styleUrls: ['./detail-food-stuff.component.scss']
})
export class DetailFoodStuffComponent implements OnInit {

  @Input() public item: FoodStuffExpandedModel;

  public detailFoodForm: FormGroup<DetailFoodForm>;
  public foodExpirationTypes$ = null;
  public foodGroups$ = null;
  public foodStoragePlaces$ = null;

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder
  ) { }

  public get getName(): FormControl<string> {
    return this.detailFoodForm.get('name') as FormControl<string>;
  }
  public get getUnits(): FormControl<number> {
    return this.detailFoodForm.get('units') as FormControl<number>;
  }
  public get getGroup(): FormControl<FoodGroupModel> {
    return this.detailFoodForm.get('group') as FormControl<FoodGroupModel>;
  }
  public get getExpirationType(): FormControl<FoodExpirationTypeModel> {
    return this.detailFoodForm.get('expirationType') as FormControl<FoodExpirationTypeModel>;
  }
  public get getExpirationDate(): FormControl<Date | null> {
    return this.detailFoodForm.get('expirationDate') as FormControl<Date | null>;
  }
  public get getStoragedIn(): FormControl<FoodStoragePlaceModel> {
    return this.detailFoodForm.get('storagedIn') as FormControl<FoodStoragePlaceModel>;
  }

  ngOnInit(): void {
    this.store.dispatch(FoodCollectionsActions.loadAllFoodCollections());
    this.foodExpirationTypes$ = this.store.select(selectFoodExpirationTypes);
    this.foodGroups$ = this.store.select(selectFoodGroups);
    this.foodStoragePlaces$ = this.store.select(selectFoodStoragePlaces);

    this.detailFoodForm = this.fb.group<DetailFoodForm>({
      name: new FormControl(this.item.name, {nonNullable: true}),
      units: new FormControl(this.item.amount, {nonNullable: true}),
      group: new FormControl(this.item.group, {nonNullable: true}),
      expirationType: new FormControl(this.item.expirationType, {nonNullable: true}),
      expirationDate: new FormControl(this.item.expirationDate),
      storagedIn: new FormControl(this.item.storagedIn, {nonNullable: true})
    });
  }

  public closeModal(ev) {
    this.store.dispatch(FridgeActions.closeDetailFoodStuff());
  }

  public foodGroupsCompareWith(g1, g2) {
    return g1.toLowerCase() === g2.toLowerCase();
  }

  public foodGroupsChange(evt) {
    this.detailFoodForm.patchValue({ group: evt.target.value });
  }

}
