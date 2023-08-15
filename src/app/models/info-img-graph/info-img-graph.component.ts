import { Component, Input } from '@angular/core';
import { InfoImgGraph } from './interfaces/Iinfo-img-graph.interfaces';

@Component({
  selector: 'info-img-graph',
  templateUrl: './info-img-graph.component.html'
})
export class InfoImgGraphComponent {

  @Input()
  public infoImgGraph?: InfoImgGraph ;

}
