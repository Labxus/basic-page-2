import { Component, Input } from '@angular/core';
import { CardsServices } from './interfaces/Icards-services.interfaces';

@Component({
  selector: 'cards-services',
  templateUrl: './cards-services.component.html'
})
export class CardsServicesComponent {

  @Input()
  public infoCardServices?: CardsServices;

}
