import { Component, Input } from '@angular/core';
import { InfoCardCompany } from './interfaces/IinfoCardCompany.interfaces';

@Component({
  selector: 'info-card-company',
  templateUrl: './info-card-company.component.html'
})

export class InfoCardCompanyComponent {

  @Input()
  public infoCardCompany?: InfoCardCompany[] = [] ;

}
