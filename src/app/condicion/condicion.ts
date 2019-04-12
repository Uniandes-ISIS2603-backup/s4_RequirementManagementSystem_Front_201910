/**
* This class represents a condition of the Requirement Management System.
* It contains all the information relevant to the condition.
*/
export class Condicion {
    /**
     * The id of the condition
     */
    id: number;
    /**
     * The description of the condition
     */
    descripcion: string;
    /**
     * true if the condition is completed, false otherwise
     */
    seCumplio: boolean;
    /**
     * true if it is a precondition, false otherwise
     */
    esPrecondicion:boolean;
}
