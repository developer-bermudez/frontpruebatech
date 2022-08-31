import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { DocumentoBuscado } from '../model/DocumentoBuscado';
import { TipoDeDocumento } from '../model/TipoDeDocumento';
import { ClienteService } from '../service/cliente-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  documentoBuscado : DocumentoBuscado = new DocumentoBuscado();
  cliente : Cliente = new Cliente();  
  collapseMensajeClienteNoEncontrado = true;
  collapseMensajeClienteInvalido = true;

  tiposDeDocumento : string[] = [TipoDeDocumento.C,TipoDeDocumento.P];

  formulario = new FormGroup({
    numeroDeDocumento: new FormControl('', [Validators.required,Validators.pattern("^[1-9][0-9]{7,9}$")]),
    tipoDeDocumento: new FormControl('', [Validators.required])
  });

  constructor(private clienteService: ClienteService ) { }

  ngOnInit(): void {   
  }

  findCliente (documentoBuscado: DocumentoBuscado) {
    this.collapseMensajeClienteNoEncontrado = true;
    this.collapseMensajeClienteInvalido = true;
    if(this.formulario.valid){
      this.clienteService.findClienteByDocumento(documentoBuscado).subscribe(response => {         
        if(response.exito == 1) {        
          this.cliente = response.cliente;    
        } else if(response.exito == 2) {
                this.cliente = new Cliente();
                this.toggleCollapseMensajeClienteInvalido();
        } else {
          this.cliente = new Cliente();
          this.toggleCollapseMensajeClienteNoEncontrado(); 
        }
      });
    }         
  }

  toggleCollapseMensajeClienteNoEncontrado() {    
    this.collapseMensajeClienteNoEncontrado = !this.collapseMensajeClienteNoEncontrado;
  }

  toggleCollapseMensajeClienteInvalido() {    
    this.collapseMensajeClienteInvalido = !this.collapseMensajeClienteInvalido;
  }

}
