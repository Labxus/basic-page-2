import { Component, Input } from '@angular/core';
import { InfoTexto } from '../../sub-page-one/interfaces/IinfoText.interfaces';

@Component({
  selector: 'text-info',
  templateUrl: './text-info.component.html'
})

export class TextInfoComponent {

  @Input()
  public infoTextInfo?: InfoTexto;

}
