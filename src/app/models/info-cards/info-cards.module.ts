import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { InfoCardsComponent } from './info-cards.component';



@NgModule({
  declarations: [
    InfoCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    InfoCardsComponent
  ]
})
export class InfoCardsModule { }
