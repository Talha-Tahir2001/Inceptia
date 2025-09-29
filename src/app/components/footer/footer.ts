import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, DatePipe],
  templateUrl: './footer.html',
  styles: ``
})
export class Footer {
  currentYear = new Date();
}
