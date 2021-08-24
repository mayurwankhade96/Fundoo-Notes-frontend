import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  loginForm!: FormGroup;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: Router) { }

  ngOnInit(): void
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid)
    {
      return;
    }

    let loginFields = {
      Email: this.loginForm.value.email,
      Password: this.loginForm.value.password
    }

    // this.userService.login(loginFields).subscribe(response => console.log(response));
    this.userService.login(loginFields).subscribe
      (
        (response: any) =>
        {
          localStorage.setItem('FundooJwt', response['token']);
          this.route.navigate(['Dashboard']);
        }
      );
  }
}
