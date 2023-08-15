import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordionFromComponent } from './chordion-from.component';
import { ChordionComponent } from './components/chordion/chordion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FromChordionComponent } from './components/from-chordion/from-chordion.component';



@NgModule({
  declarations: [
    ChordionFromComponent,
    ChordionComponent,
    FromChordionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChordionFromComponent
  ]
})
export class ChordionFromModule { }
