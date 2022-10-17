import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { FormatDateES } from '../pipes/miscellaneous.pipe';


const pipes = [
  FormatDateES
];

const components = [];

const modules = [
  CommonModule,
  HttpClientModule,
  SwiperModule
];

@NgModule({
  declarations: [
    ...pipes
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...pipes
  ]
})
export class SharedModule { }
