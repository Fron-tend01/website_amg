import { Injectable } from '@angular/core';
import { Global } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'; // Importa los operadores necesarios
import { throwError } from 'rxjs'; // Importa throwError para manejar errores

@Injectable({
  providedIn: 'root'
})
export class Service {
  containers: any;
  url: string;

  constructor(private http: HttpClient) {
    this.url = Global.url;
 
  }

  

  getWeb() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'pagina_cliente/getHeaderyFooter/3', { headers: headers }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error) => {
        console.error('Se produjo un error:', error);
        // Devuelve un observable con un mensaje de error para el usuario
        return throwError(() => new Error('Algo salió mal; por favor, inténtalo de nuevo más tarde.'));
      })
    );
  }

  getWebSecciones() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + 'pagina_cliente/getsecciones/3', { headers: headers }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error) => {
        console.error('Se produjo un error:', error);
        // Devuelve un observable con un mensaje de error para el usuario
        return throwError(() => new Error('Algo salió mal; por favor, inténtalo de nuevo más tarde.'));
      })
    );
  }

  getContainers(id: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this.url + `pagina_cliente/getContenedor/${id}`, { headers: headers }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error) => {
        console.error('Se produjo un error:', error);
        // Devuelve un observable con un mensaje de error para el usuario
        return throwError(() => new Error('Algo salió mal; por favor, inténtalo de nuevo más tarde.'));
      })
    );
  }

  getFamilies(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.url + 'articulos_get', data, { headers: headers }).pipe(
    );
  }


}
