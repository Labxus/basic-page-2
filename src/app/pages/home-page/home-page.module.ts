import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardsModule } from 'src/app/models/info-cards/info-cards.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomePageComponent } from './page/home-page.component';
import { InfoImgBtnModule } from 'src/app/models/info-img-btn/info-img-btn.module';
import { InfoImgGraphModule } from 'src/app/models/info-img-graph/info-img-graph.module';
import { CardsServicesModule } from 'src/app/models/cards-services/cards-services.module';
import { NumServicesOfferModule } from 'src/app/models/num-services-offer/num-services-offer.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    InfoCardsModule,
    SharedModule,
    InfoImgBtnModule,
    InfoImgGraphModule,
    CardsServicesModule,
    NumServicesOfferModule
  ]
})
export class HomePageModule { }
