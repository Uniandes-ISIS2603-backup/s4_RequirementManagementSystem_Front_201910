/**
 * Clase que representa un objeto de tipo Requisito. Posee todas sus características fundamentales. Faltan sus Relaciones.
 */
export class Requisito
{
    /**
     * Atributo que representa el identificador único del requisito
     */
    id: number;
     /**
     * Atributo que representa el tipo del requisito. El valor debe ser alguno de: {"NOFUNCIONAL", "FUNCIONAL"}
     */
    tipo: string;
     /**
     * Atributo que representa la descripción dada al requisito.
     */
    descripcion: string;
     /**
     * Atributo que representa la importancia dada al requisito.
     */
    importancia: number;
     /**
     * Atributo que representa la estabilidad dada del requisito.
     */
    estabilidad: number;
     /**
     * Atributo que representa los comentarios hechos al requisito.
     */
    comentarios: string;
     /**
     * Atributo que representa las aprobaciones dadas al requisito.
     */
    aprobaciones: string; 
    /**
    * Atributo que representa las fuentes de creación del requisito. 
    */
    fuentes: string;
     /**
     * Atributo que representa los cambios hechos sobre el requisito.
     */
    cambios: string;
}