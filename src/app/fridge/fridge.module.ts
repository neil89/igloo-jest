import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FridgeComponent } from './fridge.component';
import { FridgeRoutingModule } from './fridge-routing.module';
import { FoodStuffExpirationType, FoodStuffGroup, FoodStuffUnitsOfMeasure } from '../pipes/foodStuff.pipe';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FridgeService } from './fridge.service-bkp';


const pipes = [
  FoodStuffUnitsOfMeasure,
  FoodStuffGroup,
  FoodStuffExpirationType
];

@NgModule({
  declarations: [
    FridgeComponent,
    ...pipes
  ],
  imports: [
    IonicModule.forRoot(),
    SharedModule,
    FridgeRoutingModule
  ],
  providers: [
    HttpClientModule,
    //FridgeService
  ]
})
export class FridgeModule { }
