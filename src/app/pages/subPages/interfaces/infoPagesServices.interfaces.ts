import { SubPageOne } from "../sub-page-one/interfaces/IsubPageOne.interfaces";
import { SubpageThree } from "../sub-page-three/interfaces/IsubPageThree.interfaces";
import { SubPageTwo } from "../sub-page-two/interfaces/IsubPageTwo.interfaces";

export interface InfoServicios {
    recuperacionSaldoFavor?:          SubPageOne;
    facilidadesAcuedosPagos?:         SubPageTwo;
    optimizacionPlanacionTributaria?: SubpageThree;
}




