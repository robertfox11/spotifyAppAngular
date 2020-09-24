import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyfiService } from '../../services/spotyfi.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent implements OnInit {
  artist: any = {};
  topTraks: any[] = [];
  loading: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify_service: SpotyfiService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {}
  getArtist(id: string) {
    this.loading = true;
    this.spotify_service.getArtist(id).subscribe((artist) => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }
  getTopTracks(id: string) {
    this.spotify_service.getTopTracks(id).subscribe((topTracks) => {
      console.log(topTracks);
      this.topTraks = topTracks;
    });
  }
}
