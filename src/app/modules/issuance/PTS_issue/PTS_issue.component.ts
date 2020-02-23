import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

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


  //Fields data
  Customer_ID:number;
  DisableCustomerDetailesFlag:boolean = true;

  constructor(private customerService:CustomerService) { }


  async getCustomer()
  {
    if(this.IDFormControl.errors)
    {
      return;
    }
  
    //this.DisableCustomerDetailesFlag =true;
    this.Customer_ID = this.IDFormControl.value;
    console.log("Nigga");
    console.log(this.Customer_ID.toString());
    if(this.Customer_ID.toString().length >=6)
    {
      console.log("Whaat");
     await this.customerService.getCustomer(this.Customer_ID).toPromise().then((data) => {console.log(data)}).catch(
       (e) => console.log(e)
     );
    }
    
  }

  ngOnInit() {
  }

  IDFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(7),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  firstNameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15)
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15)
  ]);

  NIDFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15),
    Validators.minLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
  ]);

  mobileFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(9),
    Validators.minLength(9),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  embossedNameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(26)
  ]);

  passportFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15)
  ]);
  
  accountNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15),
    Validators.minLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    this.accountNumberValidator
   // Validators.
  ]);

  IDmatcher = new MyErrorStateMatcher();
  firstNameMatcher = new MyErrorStateMatcher();
  lastNameMatcher = new MyErrorStateMatcher();
  embossedMatcher = new MyErrorStateMatcher();
  emailMatcher = new MyErrorStateMatcher();
  NIDMatcher = new MyErrorStateMatcher();
  mobileMatcher = new MyErrorStateMatcher();
  passportMatcher = new MyErrorStateMatcher();
  accountNumberMatcher = new MyErrorStateMatcher();
  

  //Customer Validator

  accountNumberValidator(control: FormControl)
  {
     let account:string = control.value;
    if(account.length === 15)
    {
     if((account[7]+account[8]+account[9]) !== '840')
     return {
      accountNumber: {
        currency: '840'
      }
      }
    }
    return null;
    //if(!account.includes('840'))
  }
  // emailDomainValidator(control: FormControl) { 
  //   let account = control.value;
      
  //   if (email && email.indexOf("@") != -1) { 
  //     let [_, domain] = email.split("@"); 
  //     if (domain !== "codecraft.tv") { 
  //       return {
  //         emailDomain: {
  //           parsedDomain: domain
  //         }
  //       }
  //     }
  //   }
  //   return null; 
  // }
}
