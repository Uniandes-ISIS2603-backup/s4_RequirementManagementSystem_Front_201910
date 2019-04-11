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
     * The type of the approbation. 
     * It works as a little summary of the approbation
     */
    tipo: string;
    /**
     * The author of the approbation
     */
    autor: string;
    /**
     * The organization of the author who made the approbation.
     */
    organizacion: string; 
    /**
     * Date and time of creation of the approbation.
     */
    fechaYHora: string;
    /**
     * State of the approbation. 
     * It can  be: "Aprobado", "En revisión", "No aprobado".
     */
    estado: string;
    /**
     * Id of the requirement or objective.
     */
    id_aprobado: number;
    /**
     * Name of the requirement or objective.
     */
    nombre_aprobado: string;
    
}
