import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFoodStuffComponent } from './detail-food-stuff.component';

describe('DetailFoodStuffComponent', () => {
  let component: DetailFoodStuffComponent;
  let fixture: ComponentFixture<DetailFoodStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFoodStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFoodStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
