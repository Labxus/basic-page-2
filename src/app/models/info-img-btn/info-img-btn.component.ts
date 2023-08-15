import { Component, Input } from '@angular/core';

import { InfoImgBtn } from './interfaces/IInfoImgBtn.interfaces';

@Component({
  selector: 'info-img-btn',
  templateUrl: './info-img-btn.component.html'
})

export class InfoImgBtnComponent  {

  @Input()
  public infoImgBtn?: InfoImgBtn ;

}
