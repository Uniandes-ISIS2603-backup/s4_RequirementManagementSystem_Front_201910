import { Organizacion } from "../organizacion/organizacion";

export class Stakeholder {
    /**
    * Id del stakeholder
    */
    id: number;

    /**
    * Nombre del stakeholder
    */
    nombre: string;


    /**
    * Tipo del stakeholder
    */
    tipo: string;

    /**
    * organizacion del stakeholder
    */
   organizacion: Organizacion;
}
