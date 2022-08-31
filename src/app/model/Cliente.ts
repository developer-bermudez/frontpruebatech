import { TipoDeDocumento } from "./TipoDeDocumento";

export class Cliente {
    primerNombre: string = "";
    segundoNombre: string = "";
    primerApellido: string = "";
    segundoApellido: string = "";
    telefono: string = "";
    direccion: string = "";
    ciudadDeResidencia: string = "";
    numeroDeDocumento: string = "";
    tipoDeDocumento: TipoDeDocumento = TipoDeDocumento.C;

    public constructor(){        
    }
}