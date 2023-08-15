import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/shared/services/infoPage.service';
import { SubPageOne } from './interfaces/IsubPageOne.interfaces';

@Component({
  selector: 'sub-page-one',
  templateUrl: './sub-page-one.component.html'
})

export class SubPageOneComponent implements OnInit {

  public infoSubPageOne?: SubPageOne;

  constructor ( private infoPageService : InfoPageService ) {}

  ngOnInit(): void {

    this.infoPageService.searchInfoPage()
      .subscribe( infoPage => {
        this.infoSubPageOne = infoPage.infoServicios?.recuperacionSaldoFavor
      })

  }

}
