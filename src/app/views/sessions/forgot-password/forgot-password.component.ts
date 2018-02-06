import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatProgressBar, MatButton, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  userEmail;
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
  }
  submitEmail() {
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }

  close(): void {
    this.dialogRef.close();
  }
}
