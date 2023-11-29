import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vitraya-OPD-Adjudication';
  isAuthenticated: boolean = false;

  constructor() {
    if (localStorage.getItem('isAuthenticated') == 'true') {
      this.isAuthenticated = true;
    }
  }
  checkAuthentication(event: boolean) {
    this.isAuthenticated = event;

    if (event) {
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      alert('Wrong Username or Password');
    }
  }
}
