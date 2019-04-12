import { Requisito } from "../requisito/requisito";

export class Objetivo
{
    id: number;
    descripcion: string;
    importancia: number;
    estabilidad: number;
    comentarios: string;
    aprobaciones: string;
    fuentes: string;
    cambios: string;
    requisitos: Requisito[];
}