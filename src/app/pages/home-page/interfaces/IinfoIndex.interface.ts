import { CardsServices } from "src/app/models/cards-services/interfaces/Icards-services.interfaces";
import { InfoCrads } from "src/app/models/info-cards/interfaces/Iinfo-cards.interfaces";
import { InfoImgBtn } from "src/app/models/info-img-btn/interfaces/IInfoImgBtn.interfaces";
import { InfoImgGraph } from "src/app/models/info-img-graph/interfaces/Iinfo-img-graph.interfaces";
import { NumServicesOffer } from "src/app/models/num-services-offer/interfaces/InumServicesOffer.interfaces";

export interface InfoIndex {
  infoLeyes:      InfoCrads[];
  infoServices:   InfoServices;
  handleServices: CardsServices;
  servicesOffer:  NumServicesOffer[];
}

export interface InfoServices {
  infoImgBtn : InfoImgBtn;
  infoImgGraph : InfoImgGraph;
}
