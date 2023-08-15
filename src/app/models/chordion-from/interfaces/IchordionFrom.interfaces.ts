export interface ChordionFrom {
  title:     string;
  questions: Question[];
}

export interface Question {
  title:      string;
  paragraph:  string;
  idChordion: number;
}
