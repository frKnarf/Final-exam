import { Component, OnInit } from '@angular/core';
import { MovieService } from '../model/MovieService';
import { Theater } from '../model/theater.model';
import { Show } from '../model/show.model';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
})
export class MovieSelectionComponent implements OnInit {
  theaters: Theater[] = [];
  selectedTheater: Theater | null = null;
  selectedShow: Show | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getTheaters().subscribe((theaters) => {
      this.theaters = theaters;
    });
  }

  // Method to handle theater selection
  onSelectTheater(theater: Theater) {
    this.selectedTheater = theater;
    this.selectedShow = null; // Reset selected show when a new theater is selected
  }

  // Method to handle show selection
  onSelectShow(show: Show) {
    this.selectedShow = show;
  }
}
