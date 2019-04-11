import { Stakeholder } from "../stakeholder/stakeholder";

export class Organizacion {
    /**
    * Id del organizacion
    */
    id: number;

    /**
    * Nombre del organizacion
    */
    nombre: string;


    /**
    * Tipo del organizacion
    */
    sector: string;

    /**
     * Lista de stakeholders
     */
    stakeholders:Stakeholder[];
}
