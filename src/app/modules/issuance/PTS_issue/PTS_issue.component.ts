import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-ptsissue',
  templateUrl: './PTS_issue.component.html',
  styleUrls: ['./PTS_issue.component.scss']
})
export class PTSIssueComponent implements OnInit {

  AppicationTabFlag: boolean = false;
  startDate = new Date(1980, 0, 1);


  constructor() { }

  ngOnInit() {
  }

  IDFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(7),
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15)
  ]);

  NIDFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15),
    Validators.minLength(15)
  ]);

  mobileFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(9),
    Validators.minLength(9)
  ]);

  embossedNameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(26)
  ]);

  passportFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15)
  ]);
  

  IDmatcher = new MyErrorStateMatcher();
  firstNameMatcher = new MyErrorStateMatcher();
  lastNameMatcher = new MyErrorStateMatcher();
  embossedMatcher = new MyErrorStateMatcher();
  emailMatcher = new MyErrorStateMatcher();
  NIDMatcher = new MyErrorStateMatcher();
  mobileMatcher = new MyErrorStateMatcher();
  passportMatcher = new MyErrorStateMatcher();

  

}
