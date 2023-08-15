import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input()
  public titleCrad: string = ""

  @Input()
  public paragraphCrad: string = ""

}
