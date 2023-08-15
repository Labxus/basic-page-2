import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './page/contact.component';
import { InfoCardCompanyModule } from 'src/app/models/info-card-company/info-card-company.module';
import { FromImgModule } from 'src/app/models/from-img/from-img.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    InfoCardCompanyModule,
    FromImgModule
  ]
})

export class ContactModule { }
