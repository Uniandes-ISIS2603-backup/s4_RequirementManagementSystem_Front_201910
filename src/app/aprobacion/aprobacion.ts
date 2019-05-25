/**
* This class represents an approbation of the Requirement Management System.
* It contains all the information relevant to the approbation.
*/
export class Aprobacion {
    /**
     * The id of the approbation
     */
    id: number;
    /**
     * Name and Family name of the author of the approbation
     */
    autor: string;
    /**
     * Date and time of creation of the approbation.
     */
    fechaYHora: string;
    /**
     * State of the approbation. 
     * It can  be: "Aprobado", "En revisión", "No aprobado".
     */
    estado: string;
    
}
