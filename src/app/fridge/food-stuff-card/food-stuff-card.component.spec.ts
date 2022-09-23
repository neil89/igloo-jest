import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStuffCardComponent } from './food-stuff-card.component';

describe('FoodStuffCardComponent', () => {
  let component: FoodStuffCardComponent;
  let fixture: ComponentFixture<FoodStuffCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodStuffCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodStuffCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
