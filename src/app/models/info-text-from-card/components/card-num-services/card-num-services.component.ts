import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-num-services',
  templateUrl: './card-num-services.component.html'
})
export class CardNumServicesComponent {

  @Input()
  public infoUno: string = "";

  @Input()
  public infoDos: string = "";

}
