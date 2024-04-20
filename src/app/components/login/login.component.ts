import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(){}

  onSubmit() {
    const username = this.username;
    const password = this.password;
    const userData = {
      username: username,
      password: password,
    }

    console.log('submit userData', userData);
  }  
}
