import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goToHome(event: Event) {
    event.preventDefault();
    this.router.navigate(['']);
    // this.router.navigate(['contact', 'us']); for a url like /contact/us
  }
}
