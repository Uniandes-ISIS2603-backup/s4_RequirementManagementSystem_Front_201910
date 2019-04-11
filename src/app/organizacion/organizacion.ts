import { Stakeholder } from "../stakeholder/stakeholder";

export class Organizacion {
    /**
    * Id de la organizacion
    */
    id: number;

    /**
    * Nombre de la organizacion
    */
    nombre: string;


    /**
    * Tipo de la organizacion
    */
    sector: string;

    /**
     * Lista de stakeholders
     */
    stakeholders: Stakeholder[];
}
