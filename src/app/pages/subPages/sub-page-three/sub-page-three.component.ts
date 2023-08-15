import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/shared/services/infoPage.service';
import { SubpageThree } from './interfaces/IsubPageThree.interfaces';

@Component({
  selector: 'app-sub-page-three',
  templateUrl: './sub-page-three.component.html'
})
export class SubPageThreeComponent implements OnInit {

  public infoSubPageThree?: SubpageThree;

  constructor ( private infoPageService : InfoPageService ) {}

  ngOnInit(): void {

    this.infoPageService.searchInfoPage()
      .subscribe( infoPage => {
        this.infoSubPageThree = infoPage.infoServicios?. optimizacionPlanacionTributaria
      })

  }

}
