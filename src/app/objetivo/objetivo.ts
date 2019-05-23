import { Proyecto } from "../proyecto/proyecto";
import { ProyectoDetail } from "../proyecto/proyecto-detail";

/** Clase que reopresenta un objetivo*/
export class Objetivo
{
    //Id del objetivo
    id: number;
    //Descripcion del objetivo
    descripcion: string;
    //Importancia del objetivo
    importancia: number;
    //Estabilidad del objetivo
    estabilidad: number;
    //Comentarios del objetivo
    comentarios: string;

    autor: string;

    fuentes: string[];

}