import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userName: String = '';
  password: String = '';
  @Output() newItemEvent = new EventEmitter<boolean>();

  verify() {
    this.newItemEvent.emit(
      this.userName.toLowerCase() == 'vitraya' &&
        this.password.toLowerCase() == 'pin3@ppl3'
    );
  }
}
