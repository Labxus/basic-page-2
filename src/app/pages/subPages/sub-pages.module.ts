import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubPagesRoutingModule } from './subPages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SubPageOneComponent } from './sub-page-one/sub-page-one.component';
import { SubPageTwoComponent } from './sub-page-two/sub-page-two.component';
import { SubPageThreeComponent } from './sub-page-three/sub-page-three.component';
import { InfoImgBtnModule } from 'src/app/models/info-img-btn/info-img-btn.module';
import { TextInfoComponent } from './components/text-info/text-info.component';
import { InfoImgGraphModule } from 'src/app/models/info-img-graph/info-img-graph.module';
import { InfoTextFromCardModule } from 'src/app/models/info-text-from-card/info-text-from-card.module';
import { CardsServicesModule } from 'src/app/models/cards-services/cards-services.module';




@NgModule({
  declarations: [
    SubPageOneComponent,
    SubPageTwoComponent,
    SubPageThreeComponent,
    TextInfoComponent
  ],
  imports: [
    CommonModule,
    // SubPagesRoutingModule,
    InfoImgBtnModule,
    InfoImgGraphModule,
    InfoTextFromCardModule,
    CardsServicesModule,
    SharedModule
  ],
  exports: [
    SubPageOneComponent,
    SubPageTwoComponent,
    SubPageThreeComponent
  ]
})
export class SubPagesModule { }
