import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

const components = [];

const modules = [
  CommonModule,
  HttpClientModule,
  SwiperModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
