import { ChordionFrom } from "src/app/models/chordion-from/interfaces/IchordionFrom.interfaces";
import { InfoCradGraph } from "src/app/models/short-info-card-graph/interfaces/IshortInfoCard.interfaces";

export interface InfoAbout {
  titleNosotros?:       Title;
  whoWeAre?:            OurHistory;
  ourHistory?:          OurHistory;
  visionMision?:        InfoCradGraph;
  frequentlyQuestions?: ChordionFrom;
}

export interface Title {
  title: string;
}

export interface OurHistory {
  title:     string;
  paragraph: string;
  textBtn?:  string;
  imageUrl:  string;
  imgRight?: boolean;
  suptext?:  string;
}
