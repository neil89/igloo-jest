import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const components = [];

const modules = [
  CommonModule,
  HttpClientModule,
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
