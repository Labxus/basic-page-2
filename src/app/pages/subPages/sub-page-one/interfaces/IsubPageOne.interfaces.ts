import { InfoImgGraph } from "../../../../models/info-img-graph/interfaces/Iinfo-img-graph.interfaces";
import { CardsServices } from "../../../../models/cards-services/interfaces/Icards-services.interfaces";
import { InfoTexto } from "./IinfoText.interfaces";
import { InfoTextFromCard } from "src/app/models/info-text-from-card/interfaces/IinfoTextFromCard.interfaces";

export interface SubPageOne {
  learnMore?:            LearnMore;
  devoluvionSaldosInfo?: InfoTexto;
  whoHasLaw?:            OurHistory;
  becauseYouChoseUs?:    InfoImgGraph;
  devolucionDian?:       InfoTextFromCard;
  handleOtherServices?:  CardsServices;
}

export interface LearnMore {
  title:   string;
  textBtn: string;
}


export interface OurHistory {
  title:     string;
  paragraph: string;
  textBtn?:  string;
  imageUrl:  string;
  imgRight?: boolean;
  suptext?:  string;
}



