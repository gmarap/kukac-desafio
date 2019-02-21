import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class FormularioService {

  urlApi = 'http://localhost:3000';
 
  constructor(private http: HttpClient) {
  }

  enviaForm(data):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let endereco: string = `${this.urlApi}/add-data`;
    
    return this.http.post(endereco, data, httpOptions)
                    .pipe(
                      catchError((e:Response)=> throwError(e))
                    );
  }


}

