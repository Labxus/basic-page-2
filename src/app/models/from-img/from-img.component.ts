import { Component, Input } from '@angular/core';
import { From } from 'src/app/shared/interfaces/Ifrom.interfaces';

@Component({
  selector: 'from-img',
  templateUrl: './from-img.component.html'
})
export class FromImgComponent {

  @Input()
  public infoFromImg?: From

}
