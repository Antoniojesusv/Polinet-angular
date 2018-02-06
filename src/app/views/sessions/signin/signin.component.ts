import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatProgressBar, MatButton, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ForgotPasswordComponent } from 'app/views/sessions/forgot-password/forgot-password.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  form: FormGroup;
  SigninDialogRef: MatDialogRef<ForgotPasswordComponent>;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SigninComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  signin() {
    const signinData = this.form.value;
    console.log(signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }

  openSigninDialog() {
    this.SigninDialogRef = this.dialog.open(ForgotPasswordComponent);
  }
  close(): void {
    this.dialogRef.close();
  }

}


