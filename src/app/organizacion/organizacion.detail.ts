import { Stakeholder } from "../stakeholder/stakeholder";
import { Organizacion } from "../organizacion/organizacion";

export class OrganizacionDetail extends Organizacion {

    /**
     * Lista de stakeholders
     */
    stakeholders: Stakeholder[];
}
