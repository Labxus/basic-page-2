import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-graph',
  templateUrl: './graph.component.html'
})
export class GraphComponent {

  @Input()
  public name: string = "";

  @Input()
  public percent: string = "";

}
