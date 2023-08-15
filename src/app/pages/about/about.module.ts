import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './page/about.component';
import { InfoImgBtnModule } from 'src/app/models/info-img-btn/info-img-btn.module';
import { ShortInfoCardGraphModule } from 'src/app/models/short-info-card-graph/short-info-card-graph.module';
import { ChordionFromModule } from 'src/app/models/chordion-from/chordion-from.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    InfoImgBtnModule,
    ShortInfoCardGraphModule,
    ChordionFromModule
  ]
})
export class AboutModule { }
