import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['d']);
  }
}
