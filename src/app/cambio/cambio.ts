/**
* This class represents a change of the Requirement Management System.
* It contains all the information relevant to the change.
*/
export class Cambio {
    /**
     * The id of the change
     */
    id: number;
    /**
     * Type of the change.
     * It can be: "Aprobación", "Modificación" or "Eliminación"
     */
    tipo: string;
    /**
     * Name and Family name of the author of the change.
     */
    autor: string;
     /**
     * Date and time of creation of the change.
     */
    fechaYHora: string;


}
