import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardCompanyComponent } from './info-card-company.component';
import { InfoCardComponent } from './components/info-card/info-card.component';



@NgModule({
  declarations: [
    InfoCardCompanyComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoCardCompanyComponent
  ]
})
export class InfoCardCompanyModule { }
