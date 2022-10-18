import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
    private readonly fb: FormBuilder,
    private readonly cd: ChangeDetectorRef
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
//    this.store.dispatch(FoodCollectionsActions.loadAllFoodCollections());
    this.foodExpirationTypes$ = this.store.select(selectFoodExpirationTypes);
    this.foodGroups$ = this.store.select(selectFoodGroups);
    // this.foodGroups$ = [
    //   { name: 'bread', id: 'food-group-bread' },
    //   { name: 'cleaning', id: 'food-group-cleaning' },
    //   { name: 'dairy', id: 'food-group-dairy' },
    //   { name: 'fish', id: 'food-group-fish' },
    //   { name: 'frozen', id: 'food-group-frozen' },
    //   { name: 'meat', id: 'food-group-meat' },
    //   { name: 'pets', id: 'food-group-pets' },
    //   { name: 'sauces', id: 'food-group-sauces' },
    //   { name: 'snacks', id: 'food-group-snacks' },
    //   { name: 'vegetables', id: 'food-group-vegetables' },
    //   { name: 'vegetarian', id: 'food-group-vegetarian' }
    // ];
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
    console.log(`Compare ${g1.name} - ${g2.name}`);
    return g1.name === g2.name;
  }

  public foodExpirationTypesCompareWith(et1, et2) {
    console.log(`Compare ${et1.name} - ${et2.name}`);
    return et1.name === et2.name;
  }

  public foodGroupsChange(evt) {
    this.detailFoodForm.patchValue({ group: evt.target.value });
  }

  public foodExpirationTypeChange(evt) {
    this.detailFoodForm.patchValue({ expirationType: evt.target.value });
  }

}
