import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit
{
  registerForm!: FormGroup;
  submitted = false;
  show: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  password()
  {
    this.show = !this.show;
  }

  ngOnInit(): void
  {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid)
    {
      return;
    }

    let registerFields = {
      FirstName: this.registerForm.value.firstName,
      LastName: this.registerForm.value.lastName,
      Email: this.registerForm.value.email,
      Password: this.registerForm.value.password
    }

    this.userService.register(registerFields).subscribe(response => console.log(response));
  }
}

