import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';

import { AppComponent } from './app.component';
import { SeatReservationComponent } from './components/seat-reservation.component';
import { SeatService } from './services/seat.service';

@NgModule({
  declarations: [AppComponent, SeatReservationComponent, HelloComponent],
  imports: [BrowserModule, FormsModule],
  providers: [SeatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
