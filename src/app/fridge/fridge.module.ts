import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FridgeComponent } from './fridge/fridge.component';
import { FridgeRoutingModule } from './fridge-routing.module';
import { FoodStuffExpirationType, FoodStuffGroup, FoodStuffUnitsOfMeasure } from '../pipes/foodStuff.pipe';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FridgeService } from './fridge.service';
import { FoodStuffCardComponent } from './food-stuff-card/food-stuff-card.component';


const pipes = [
  FoodStuffUnitsOfMeasure,
  FoodStuffGroup,
  FoodStuffExpirationType
];

@NgModule({
  declarations: [
    FridgeComponent,
    ...pipes,
    FoodStuffCardComponent
  ],
  imports: [
    IonicModule.forRoot(),
    SharedModule,
    FridgeRoutingModule,
  ],
  providers: [
    HttpClientModule,
    FridgeService
  ]
})
export class FridgeModule { }
