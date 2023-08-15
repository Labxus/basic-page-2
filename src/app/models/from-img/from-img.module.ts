import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromImgComponent } from './from-img.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FromImgComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FromImgComponent
  ]
})
export class FromImgModule { }
