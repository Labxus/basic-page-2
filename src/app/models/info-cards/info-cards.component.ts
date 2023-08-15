import { Component, Input } from '@angular/core';

import { InfoCrads } from './interfaces/Iinfo-cards.interfaces';

@Component({
  selector: 'info-cards',
  templateUrl: './info-cards.component.html'
})
export class InfoCardsComponent {

  @Input()
  public infoCard?: InfoCrads[] = [] ;


}
