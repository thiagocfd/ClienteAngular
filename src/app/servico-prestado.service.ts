import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL = environment.apiURLBase + "/api/servicos-prestados";

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoBusca>{

    const httpParams = new HttpParams()
      .set("nome",nome)
      .set("mes", mes ? mes.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    // /api/servicos-prestados?nome=Maria&mes=1
    return this.http.get<any>(url);
  }
}
