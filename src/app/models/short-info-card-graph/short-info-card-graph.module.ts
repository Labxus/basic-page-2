import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortInfoCardGraphComponent } from './short-info-card-graph.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    ShortInfoCardGraphComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ShortInfoCardGraphComponent
  ]
})
export class ShortInfoCardGraphModule { }
