import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from 'express';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

    loginHandler(loginForm: NgForm): void {
      
    }

}
