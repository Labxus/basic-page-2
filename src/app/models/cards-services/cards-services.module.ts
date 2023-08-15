import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsServicesComponent } from './cards-services.component';
import { CardIconComponent } from './components/card-icon/card-icon.component';



@NgModule({
  declarations: [
    CardsServicesComponent,
    CardIconComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardsServicesComponent
  ]
})
export class CardsServicesModule { }
