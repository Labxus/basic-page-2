import { Component, OnInit } from '@angular/core';

import { Info } from 'src/app/shared/interfaces/info.interfaces';
import { InfoPageService } from 'src/app/shared/services/infoPage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})

export class HomePageComponent implements OnInit {

  public infoPage?: Info;

  constructor( private infoPageServices: InfoPageService ){}

  ngOnInit(): void {
    this.infoPageServices.searchInfoPage()
      .subscribe( infoPage => {
        this.infoPage = infoPage
      })
  }



}
