import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotyfiService {
  constructor(private http: HttpClient) {
    console.log('Estamos listo para utilizar Spotify');
  }
  // Metodo que necesitamos para recibir los datos
  getQuery(query: string) {
    const urlPoint = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCEGpsS2P9cDGLwnLPtMiVE0FFBKVBoQI7Oy-t8AiR1rkZKvkweGrYyHXPHJRYFMDFIIb0kKjJFCluP5sc',
    });
    return this.http.get(urlPoint, { headers });
  }
  getNewRealese() {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => {
        return data['albums'].items;
      })
    );
  }
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
  }
}
