import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit
{
  resetPasswordForm!: FormGroup;
  submitted = false;
  show: boolean = false;
  token: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void
  {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

    this.token = this.activeRoute.snapshot.paramMap.get('token');
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

    let resetFields = {
      NewPassword: this.resetPasswordForm.value.password,
      ConfirmPassword: this.resetPasswordForm.value.confirmPassword
    }

    this.userService.reset(this.token, resetFields).subscribe(response => console.log(response));
  }
}
