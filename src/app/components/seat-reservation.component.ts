import { Component, OnInit } from '@angular/core';
import { SeatService } from '../services/seat.service';
import { Seat } from '../models/seat.model';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css'],
})
export class SeatReservationComponent implements OnInit {
  seats: Seat[][] = [];
  bookedSeats: Seat[] = [];
  numSeats: number = 1; // Default booking for 1 seat

  constructor(private seatService: SeatService) {}

  ngOnInit(): void {
    this.seats = this.seatService.getSeats();
  }

  // seat booking
  onBookSeats() {
    if (this.numSeats < 1 || this.numSeats > 7) {
      alert('You can only book between 1 and 7 seats.');
      return; // Stop if the input is invalid
    }

    // Proceed with booking if input is valid
    this.bookedSeats = this.seatService.bookSeats(this.numSeats);
  }
}
