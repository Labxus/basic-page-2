// Generated by https://quicktype.io


import { InfoFooter } from "../components/footer/interfaces/Ifooter.interfaces";
import { InfoIndex } from "src/app/pages/home-page/interfaces/IinfoIndex.interface";
import { InfoNavbar } from "../components/navbar/interfaces/Inavbar.interfaces";
import { InfoAbout } from "src/app/pages/about/interfaces/IinfoAbout.interfaces";
import { InfoContacto } from "src/app/pages/contact/interfaces/infoContact.interfaces";
import { InfoServicios } from "src/app/pages/subPages/interfaces/infoPagesServices.interfaces";

export interface Info {
  infoIndex?:    InfoIndex;
  infoNosotros?: InfoAbout;
  infoContacto?: InfoContacto;
  infoServicios?: InfoServicios;
  InfoNavbar?:   InfoNavbar;
  InfoFooter?:   InfoFooter;
}



