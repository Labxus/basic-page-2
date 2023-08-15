import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTextFromCardComponent } from './info-text-from-card.component';
import { TitleCardInfoComponent } from './components/title-card-info/title-card-info.component';
import { CardNumServicesComponent } from './components/card-num-services/card-num-services.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InfoTextFromCardComponent,
    TitleCardInfoComponent,
    CardNumServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InfoTextFromCardComponent
  ]
})
export class InfoTextFromCardModule { }
