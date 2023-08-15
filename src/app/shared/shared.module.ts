import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoComponent } from './components/video/video.component';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShortCardComponent } from './components/short-card/short-card.component';
import { GraphComponent } from './components/graph/graph.component';
import { FromComponent } from './components/from/from.component';
import { TextVideoComponent } from './components/text-video/text-video.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    VideoComponent,
    CardComponent,
    ShortCardComponent,
    GraphComponent,
    FromComponent,
    TextVideoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    CardComponent,
    VideoComponent,
    ShortCardComponent,
    GraphComponent,
    FromComponent,
    TextVideoComponent
  ]
})
export class SharedModule { }
