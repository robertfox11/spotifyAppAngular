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
        'Bearer BQCxqi2zhj9NrbcOkVDggFTe9kozCPbbXSzVOqhwcoixCRlGP9yFoweO7Bv8r-BVJRSI9R2mI4vsRkIX5Zg',
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
