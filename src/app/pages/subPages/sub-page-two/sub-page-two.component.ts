import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/shared/services/infoPage.service';
import { SubPageTwo } from './interfaces/IsubPageTwo.interfaces';

@Component({
  selector: 'app-sub-page-two',
  templateUrl: './sub-page-two.component.html'
})

export class SubPageTwoComponent implements OnInit {

  public infoSubPageTwo?: SubPageTwo;

  constructor ( private infoPageService : InfoPageService ) {}

  ngOnInit(): void {

    this.infoPageService.searchInfoPage()
      .subscribe( infoPage => {
        this.infoSubPageTwo = infoPage.infoServicios?.facilidadesAcuedosPagos
      })

  }

}
