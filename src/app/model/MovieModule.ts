import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSelectionComponent } from '../movie-selection/movie-selection.component';

@NgModule({
  declarations: [MovieSelectionComponent],
  imports: [CommonModule],
  exports: [MovieSelectionComponent],
})
export class MovieModule {}
