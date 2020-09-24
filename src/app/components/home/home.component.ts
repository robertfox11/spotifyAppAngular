import { Component, OnInit } from '@angular/core';
import { SpotyfiService } from '../../services/spotyfi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;
  constructor(private spotifyService: SpotyfiService) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit(): void {
    this.spotifyService.getNewRealese().subscribe(
      (data: any) => {
        console.log(data);
        this.newSongs = data;
        this.loading = false;
        this.error = false;
      },
      (errorService) => {
        this.loading = false;
        this.error = true;
        console.log(errorService.error.error.message);
        this.messageError = errorService.error.error.message;
      }
    );
  }
}
