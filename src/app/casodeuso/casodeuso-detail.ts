import {Casodeuso} from "./casodeuso";

/**
* This class represents a caseofuseDetail of the Requirement Management System.
* It contains all the information relevant to the detail of a case of use.
*/
export class CasodeusoDetail extends Casodeuso{
    /**
     * The id of a specific case of use.
     */
    id: number;

    /**
     * The array of a caminos related to a case of use.
     */
    caminos: any[];

    /**
     * The array of a condiciones related to a case of use.
     */
    condiciones: any[];
}
