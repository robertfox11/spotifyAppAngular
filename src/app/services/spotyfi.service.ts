import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotyfiService {
  //ruta de la peticion del json
  private urlPoint: string = 'https://api.spotify.com/v1/browse/new-releases';

  //cabecera principal para colocar el token
  private httpHeaders = new HttpHeaders({
    Authorization:
      'Bearer BQAcMKP-Y89GM94YkLxTqxspqOiZB-n3AVfcDfeB6IiqBErbNmwYgj2rqgwfj7ajwK2rXcWBnKs0QL9-lxE',
  });
  constructor(private http: HttpClient) {
    console.log('Estamos listo para utilizar Spotify');
  }
  // Metodo que necesitamos para recibir los datos
  getNewRealese() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: this.httpHeaders,
    });
  }
}
