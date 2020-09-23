import { Component, OnInit } from '@angular/core';
import { SpotyfiService } from '../../services/spotyfi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  constructor(private spotifyService: SpotyfiService) {
    this.spotifyService.getNewRealese().subscribe((data: any) => {
      console.log(data.albums.items);
      this.newSongs = data.albums.items;
    });
  }

  ngOnInit(): void {}
}
