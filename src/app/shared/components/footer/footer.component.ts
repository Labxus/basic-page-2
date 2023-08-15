import { Component } from '@angular/core';
import { Info } from '../../interfaces/info.interfaces';
import { InfoPageService } from '../../services/infoPage.service';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  public infoFooter: Info = {}

  constructor ( private infoPageSerivce: InfoPageService ) {}


  ngOnInit(): void {

    this.infoPageSerivce.searchInfoPage()
      .subscribe( infoPage => {

        this.infoFooter = infoPage

      })

  }

}
