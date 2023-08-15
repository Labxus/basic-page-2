export interface CardsServices {
  title:        string;
  supParagraph: string;
  services:     Service[];
}

export interface Service{
  iconsUrl?:  string;
  linkPage?:  string;
  paragraph?: string;
}
