import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit
{
  forgetpasswordForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void
  {
    this.forgetpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.forgetpasswordForm.controls; }

  onSubmit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetpasswordForm.invalid)
    {
      return;
    }

    let forgetPasswordFields =
    {
      Email: this.forgetpasswordForm.value.email,
    }

    this.userService.forget(forgetPasswordFields).subscribe(response => console.log(response));
  }
}
