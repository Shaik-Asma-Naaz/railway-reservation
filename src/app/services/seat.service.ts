import { Injectable } from '@angular/core';
import { Seat } from '../models/seat.model';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  seats: Seat[][] = [];

  constructor() {
    this.initializeSeats();
  }

  // Initialize the seats for the coach (80 seats, 11 rows of 7, last row 3 seats)
  initializeSeats() {
    let seatNumber = 1;
    for (let i = 0; i < 11; i++) {
      let row = [];
      for (let j = 0; j < (i === 10 ? 3 : 7); j++) {
        row.push({ seatNumber: seatNumber++, isBooked: false });
      }
      this.seats.push(row);
    }
  }

  // Booking logic
  bookSeats(numSeats: number): Seat[] {
    let bookedSeats: Seat[] = [];

    // Try to find seats in one row
    for (let row of this.seats) {
      let availableSeats = row.filter((seat) => !seat.isBooked);
      if (availableSeats.length >= numSeats) {
        bookedSeats = availableSeats.slice(0, numSeats);
        break;
      }
    }

    // If not available in one row, find nearby seats
    if (bookedSeats.length === 0) {
      for (let row of this.seats) {
        let availableSeats = row.filter((seat) => !seat.isBooked);
        bookedSeats.push(...availableSeats);
        if (bookedSeats.length >= numSeats) {
          bookedSeats = bookedSeats.slice(0, numSeats);
          break;
        }
      }
    }

    // Mark seats as booked
    bookedSeats.forEach((seat) => (seat.isBooked = true));
    return bookedSeats;
  }

  // Get current status of seats
  getSeats(): Seat[][] {
    return this.seats;
  }
}
