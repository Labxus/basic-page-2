import { Component, Input } from '@angular/core';
import { ChordionFrom } from './interfaces/IchordionFrom.interfaces';

@Component({
  selector: 'chordion-from',
  templateUrl: './chordion-from.component.html'
})

export class ChordionFromComponent {

  @Input()
  public infoChordionFrom?: ChordionFrom ;

}
