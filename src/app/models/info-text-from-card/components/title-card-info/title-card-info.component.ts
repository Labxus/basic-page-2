import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-card-info',
  templateUrl: './title-card-info.component.html'
})

export class TitleCardInfoComponent {

  @Input()
  public infoTitle?:        string = "";

  @Input()
  public infoParagraphOne?: string = "";

  @Input()
  public infoParagraphTwo?: string = "";

}
