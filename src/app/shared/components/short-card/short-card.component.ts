import { Component, Input } from '@angular/core';


@Component({
  selector: 'shared-short-card',
  templateUrl: './short-card.component.html'
})
export class ShortCardComponent {

  @Input()
  public titleShortCard: string = "";

  @Input()
  public paragraphShortCard: string = "";

}
