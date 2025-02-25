import { Component, OnInit } from '@angular/core';
import { SpotyfiService } from '../../services/spotyfi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading: boolean;
  constructor(private spotify_service: SpotyfiService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    console.log('termino', termino);
    this.loading = true;
    this.spotify_service.getArtista(termino).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}
