import { Component, Input } from '@angular/core';
import { Theater } from '../model/theater.model';
import { Show } from '../model/show.model';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
})
export class SeatSelectionComponent {
  @Input() selectedTheater: Theater | null = null;
  @Input() selectedShow: Show | null = null;
  selectedSeats: string[] = [];
  totalPrice: number = 0;

  // Method to handle seat selection
  onSelectSeat(seat: string) {
    if (this.selectedSeats.includes(seat)) {
      // Deselect seat if it's already selected
      this.selectedSeats = this.selectedSeats.filter((s) => s !== seat);
      this.totalPrice -= this.selectedTheater?.seatPrice || 0;
    } else {
      // Select seat if it's not already selected
      this.selectedSeats.push(seat);
      this.totalPrice += this.selectedTheater?.seatPrice || 0;
    }
  }
}
