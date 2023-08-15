import { Component, Input } from '@angular/core';
import { InfoCradGraph } from './interfaces/IshortInfoCard.interfaces';


@Component({
  selector: 'short-info-card-graph',
  templateUrl: './short-info-card-graph.component.html'
})
export class ShortInfoCardGraphComponent {

  @Input()
  public infoShortInfoCardGraph?: InfoCradGraph ;

}
