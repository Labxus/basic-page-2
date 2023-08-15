import { Component, OnInit } from '@angular/core';


import { InfoPageService } from '../../services/infoPage.service';
import { Info } from '../../interfaces/info.interfaces';


@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public info: Info = {} ;
  public onLinks: boolean = false;
  public onSubLinks: boolean = false;

  constructor ( private infoPageSerivce: InfoPageService ) {}

  ngOnInit(): void {
    this.infoPageSerivce.searchInfoPage()
      .subscribe( infoPage => {

        this.info = infoPage

      })
  }

  // handle menuHamburger
  onDisplayLinks():void {
    this.onLinks = !this.onLinks
  }

  // handle menuHamburger
  onDisplaySubLinks():void {
    this.onSubLinks = !this.onSubLinks
  }

}
