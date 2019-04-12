import {Camino} from "./camino";

/**
* This class represents a caminoDetail of the Requirement Management System.
* It contains all the information relevant to the detail of a camino.
*/
export class CaminoDetail extends Camino{
    /**
     * The id of a specific camino.
     */
    idPaso: number;
    
    /**
     * The pasos of a specific camino.
     */
    pasos: string;
}