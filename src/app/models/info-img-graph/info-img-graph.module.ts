
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoImgGraphComponent } from './info-img-graph.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InfoImgGraphComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InfoImgGraphComponent
  ]
})
export class InfoImgGraphModule { }
