import { Component, Input } from '@angular/core';
import { NumServicesOffer } from './interfaces/InumServicesOffer.interfaces';

@Component({
  selector: 'num-services-offer',
  templateUrl: './num-services-offer.component.html'
})

export class NumServicesOfferComponent {

  @Input()
  public infoNumServicesOffer?: NumServicesOffer[] = []

}
