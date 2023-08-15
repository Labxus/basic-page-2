export interface InfoImgGraph {
  title:         string;
  paragraph:     string;
  imageUrl:      string;
  imgRight:      boolean;
  percentages:   InfoGraph[];
  supParagraph?: string;
}

export interface InfoGraph {
  name:    string;
  percent: string;
}
