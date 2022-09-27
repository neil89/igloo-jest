import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { FoodStuff } from '../../models/food.model';
import { FridgeService } from '../fridge.service';


@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss'],
})

export class FridgeComponent implements OnInit, OnDestroy {

  @ViewChild(IonModal) public modal: IonModal;

  public items: FoodStuff[] = [];
  public imgSrc: string[] = [];

  private readonly clearSubscriptions$: Subject<void> = new Subject();

  constructor(
    private fridgeService: FridgeService
  ) { }

  public ngOnInit(): void {
    this.getItems();
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions$.next();
    this.clearSubscriptions$.complete();
  }


  public closeModal(ev) {
    this.modal.dismiss(null, 'cancel');
  }

  private getItems() {

    // const peppers: FoodStuff = {
    //   id: '1',
    //   amount: 2,
    //   units: 'units',
    //   name: 'Pimientos',
    //   group: 'Vegetables',
    //   expirationType: 'Short-lasting'
    // };
    // const ham: FoodStuff = {
    //   id: '2',
    //   amount: 1,
    //   units: 'package',
    //   name: 'Jamón cocido',
    //   group: 'Meat',
    //   expirationType: 'Long-lasting'
    // };

    this.fridgeService.getProductsStuff()
      .pipe(takeUntil(this.clearSubscriptions$))
      .subscribe( food => {
        this.items = [];
        if( food?.length > 0 ) {
          food.forEach( (f) => {
            this.items.push( {
              id: f.id,
              amount: f.amount,
              units: f.units,
              name: f.name,
              group: f.group,
              expirationType: f.expirationType
            } as FoodStuff );
          });
        }
    });


    // this.fridgeService.getProductStuffImages(peppers.name).subscribe((result) => {
    //   this.imgSrc = result.results.map((idx: any) => idx.urls.regular);
    //   console.log(result);
    // });

    // this.items.push(peppers);
    // this.items.push(ham);
  }

}
