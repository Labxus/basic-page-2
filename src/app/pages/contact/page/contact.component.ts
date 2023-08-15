import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../../shared/services/infoPage.service';
import { Info } from 'src/app/shared/interfaces/info.interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {

  constructor( private infoPageSerivce: InfoPageService ) {}

  public infoConctac?: Info;

  ngOnInit(): void {
    this.infoPageSerivce.searchInfoPage()
      .subscribe( infoAbout => {
        this.infoConctac = infoAbout
      })
  }

}
