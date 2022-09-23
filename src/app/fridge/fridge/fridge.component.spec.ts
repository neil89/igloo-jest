import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { FoodStuffExpirationType, FoodStuffGroup, FoodStuffUnitsOfMeasure } from '../../pipes/foodStuff.pipe';

import { FridgeComponent } from './fridge.component';

const firestoreStub = {
  collection: (name: string) => ({
    valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
    set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
  }),
};

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
        RouterModule.forRoot([]),
        HttpClientTestingModule,
      ],
      providers: [
        { provide: AngularFirestore, useValue: firestoreStub },
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
