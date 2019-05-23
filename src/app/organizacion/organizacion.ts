import { Stakeholder } from "../stakeholder/stakeholder";
import { Proyecto } from "../proyecto/proyecto";

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
    stakeHolders: Stakeholder[];

    /**
     * Lista de proyectos
     */
    proyectos: Proyecto[];

}
