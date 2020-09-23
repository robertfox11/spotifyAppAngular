import { Component, OnInit } from '@angular/core';
import { SpotyfiService } from '../../services/spotyfi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean;
  constructor(private spotifyService: SpotyfiService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.spotifyService.getNewRealese().subscribe((data: any) => {
      console.log(data);
      this.newSongs = data;
      this.loading = false;
    });
  }
}
