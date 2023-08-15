import { Component, Input } from '@angular/core';

@Component({
  selector: 'chordion',
  templateUrl: './chordion.component.html'
})
export class ChordionComponent {

  @Input()
  public titleChordion: string = ""

  @Input()
  public paragraphChordion: string = ""

}
