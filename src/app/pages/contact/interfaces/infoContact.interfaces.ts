import { InfoCardCompany } from "src/app/models/info-card-company/interfaces/IinfoCardCompany.interfaces";
import { From } from "src/app/shared/interfaces/Ifrom.interfaces";

export interface InfoContacto {
  titleContacto: Title;
  infoCards:     InfoCardCompany[];
  form:          From;
}

export interface Title {
  title: string;
}


