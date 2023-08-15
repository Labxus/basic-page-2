import { Component, Input } from '@angular/core';
import { Service } from '../../interfaces/Icards-services.interfaces';

@Component({
  selector: 'card-icon',
  templateUrl: './card-icon.component.html'
})
export class CardIconComponent {

  @Input()
  public infoCardIcon?: Service ;

}
