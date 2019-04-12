import {Condicion} from "./condicion";

/**
* This class represents a conditionDetail of the Requirement Management System.
* It contains all the information relevant to the detail of a condition.
*/
export class CondicionDetail extends Condicion{
    /**
     * The id of a specific condition.
     */
    id: number;
    
    /**
     * The description of a specific condition.
     */
    descripcion: string;
}
