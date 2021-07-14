import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/shared/services/user-context.service';
import { LoginService } from './../../../shared/services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  constructor(
    private router: Router,
    private loginService: LoginService,
    private userContext: UserContextService
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService
      .login(this.form.value.name, this.form.value.email)
      .subscribe((user) => {
        this.userContext.user = user;
        this.router.navigate(['d']);
      });
  }
}
