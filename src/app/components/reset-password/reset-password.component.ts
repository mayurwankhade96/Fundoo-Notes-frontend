import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit
{

  constructor(private formBuilder: FormBuilder) { }

  resetPasswordForm!: FormGroup;
  submitted = false;
  show: boolean = false;

  ngOnInit(): void
  {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  get f() { return this.resetPasswordForm.controls; }

  password()
  {
    this.show = !this.show;
  }

  onSubmit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPasswordForm.invalid)
    {
      return;
    }
  }
}
