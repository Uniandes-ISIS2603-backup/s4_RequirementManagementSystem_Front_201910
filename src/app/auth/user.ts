/**
* This class represents a user of s4_requirement-Front.
* It contains all the information relevant to the user.
*/
export class User {
    
    id:number;
    
    /**
    * The user's name
    */
    usuario: string;

    /**
    * The user's password
    */
    contrasena: string;

    /**
    * The user's role
    */
    tipo: string;
}
