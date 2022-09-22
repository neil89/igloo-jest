import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FoodStuffExpirationType, FoodStuffGroup, FoodStuffUnitsOfMeasure } from '../pipes/foodStuff.pipe';

import { FridgeComponent } from './fridge.component';
import { FridgeService } from './fridge.service';

describe('FridgeComponent', () => {
  let component: FridgeComponent;
  let fixture: ComponentFixture<FridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FridgeComponent,
        FoodStuffGroup,
        FoodStuffUnitsOfMeasure,
        FoodStuffExpirationType
      ],
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot([])
      ],
      providers: [
        FridgeService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
