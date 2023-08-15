import { Component, Input } from '@angular/core';
import { InfoTextFromCard } from './interfaces/IinfoTextFromCard.interfaces';

@Component({
  selector: 'info-text-from-card',
  templateUrl: './info-text-from-card.component.html'
})

export class InfoTextFromCardComponent {

  @Input()
  public intoTextFromCard?: InfoTextFromCard;

}
