import { CreateComponent } from './../publicaciones/create/create.component';
import { DeleteComponent } from './../publicaciones/delete/delete.component';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Publicaciones } from '../models/Publicaciones';




const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/sisEventosWs/getPublicaciones/';
const API_URL_CREATE = 'http://localhost:8080/sisEventosWs/saveOrUpdatePublicaciones/';
const API_URL_DELATE = 'http://localhost:8080/sisEventosWs/deletePublicaciones/';
@Injectable()

export class PublicacionService {
    apiUrl: string;
    constructor(private http: HttpClient) { }

    buscarPublicaciones(): Observable<Publicaciones[]> {
        return this.http.get<Publicaciones[]>(API_URL);
    }
    crearOActualizar(publicaciones: Publicaciones): Observable<Publicaciones[]> {
        return this.http.post<Publicaciones[]>(API_URL_CREATE, publicaciones)
    }
    delatePublicaciones(publicaciones: Publicaciones): Observable<Publicaciones[]> {
        console.log(publicaciones);
        return this.http.post<Publicaciones[]>(API_URL_DELATE, publicaciones);
    }
}
