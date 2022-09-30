import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FridgeComponent } from './fridge/fridge.component';
import { FridgeRoutingModule } from './fridge-routing.module';
import { FoodStuffExpirationType, FoodStuffGroup, FoodStuffUnitsOfMeasure } from '../pipes/foodStuff.pipe';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FridgeService } from './fridge.service';
import { FoodStuffCardComponent } from './food-stuff-card/food-stuff-card.component';
import { StoreModule } from '@ngrx/store';
import { fridgeReducer } from './store/reducers/fridge.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FridgeEffects } from './store/effects/fridge.effects';
import { DetailFoodStuffComponent } from './detail-food-stuff/detail-food-stuff.component';


const pipes = [
  FoodStuffUnitsOfMeasure,
  FoodStuffGroup,
  FoodStuffExpirationType
];

@NgModule({
  declarations: [
    FridgeComponent,
    FoodStuffCardComponent,
    ...pipes,
    DetailFoodStuffComponent
  ],
  imports: [
    SharedModule,
    FridgeRoutingModule,
    IonicModule.forRoot(),
    StoreModule.forFeature('fridge', fridgeReducer),
    EffectsModule.forFeature([FridgeEffects])
  ],
  providers: [
    HttpClientModule,
    FridgeService
  ]
})
export class FridgeModule { }
