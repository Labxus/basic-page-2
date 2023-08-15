import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-text-video',
  templateUrl: './text-video.component.html'
})

export class TextVideoComponent {

  @Input()
  public infoTexto?: string = ""

  @Input()
  public infoLinkVideo?: string = ""


}
