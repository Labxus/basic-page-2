import { From } from "src/app/shared/interfaces/Ifrom.interfaces";

export interface InfoTextFromCard {
  title:            string;
  paragraphOne:     string;
  paragraphTwo:     string;
  infoFrom:         From;
  infoCards:        CardNumServices[];
}

export interface CardNumServices {
  infoUno: string;
  infoDos: string;
}
