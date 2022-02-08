import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient } from '@angular/common/http';
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
}
