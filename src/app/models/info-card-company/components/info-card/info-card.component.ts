import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html'
})
export class InfoCardComponent {

  @Input()
  public paragraphOne: string = ""

  @Input()
  public paragraphTwo: string = ""

}
