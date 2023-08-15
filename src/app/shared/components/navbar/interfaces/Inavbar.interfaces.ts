export interface InfoNavbar {
  titleNavbar: string;
  datosNav: DatosNav[]
}

export interface DatosNav {
  title:    string;
  link:     string;
  subMenu?: Sublinks[];
}

export interface Sublinks {
  title: string;
  link:  string;
}
