import { Aprobacion } from "./aprobacion";
/**
* This class represents an aprobacionDetail of the Requirement Management System.
* It contains all the information relevant to the detail of an approbation.
*/
export class AprobacionDetail extends Aprobacion{
    /**
     * A review of a stakeholder on a specific approbation.
     */
    comentario: string;
}
