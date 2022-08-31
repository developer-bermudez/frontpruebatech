import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { DocumentoBuscado } from '../model/DocumentoBuscado';
import { MensajeDeErrorDelModelo } from '../model/MensajeDeErrorDelModelo';
import { MensajeDeRespuesta } from '../model/MensajeDeRespuesta';
import { TipoDeDocumento } from '../model/TipoDeDocumento';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = "http://localhost:8090/cliente";

  constructor(private _http: HttpClient) { }

  public findClienteByDocumento(documentoBuscado: DocumentoBuscado) : Observable<MensajeDeRespuesta> {
    return this._http.post<MensajeDeRespuesta>(this.url,documentoBuscado);
  }
}
