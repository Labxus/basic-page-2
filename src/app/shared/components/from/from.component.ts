import { Component, Input } from '@angular/core';
import { From } from '../../interfaces/Ifrom.interfaces';

@Component({
  selector: 'shared-from',
  templateUrl: './from.component.html'
})

export class FromComponent {

  @Input()
  public infoplaceholder?: From;

}
