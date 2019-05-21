import {Proyecto} from "./proyecto";

export class ProyectoDetail extends Proyecto{
     /**
     * The id of a specific project.
     */
    id: number;

    /**
     * The array of a objectives related to a project.
     */
    objetivos: any[];
}
