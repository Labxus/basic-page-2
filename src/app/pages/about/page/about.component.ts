import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/shared/interfaces/info.interfaces';
import { InfoPageService } from 'src/app/shared/services/infoPage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {

  public InfoAbout?: Info;

  constructor( private infoPageService: InfoPageService ){}

  ngOnInit(): void {
    this.infoPageService.searchInfoPage()
      .subscribe( infoAbout => {
        this.InfoAbout = infoAbout
      })
  }

}
