import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieModule } from './model/MovieModule';
import { SeatModule } from './model/SeatModule';
import { RouterModule, Routes } from '@angular/router';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'movie', component: MovieSelectionComponent },
  { path: 'seat', component: SeatSelectionComponent },
  { path: '**', redirectTo: '/movie' },
];

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MovieModule,
    SeatModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
