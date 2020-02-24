import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';




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

  //Strings
  SubmitErrorMessage:string = '';
  SubmitButtonText:string = 'Add';

  //Parameters
  Tab:number = 0;
  startDate = new Date(1980, 0, 1);

  //Field Data
  Customer_ID:number;

  //Flags
  AppicationTabFlag: boolean = true;
  CustomerExist:boolean = false;



  constructor(private customerService:CustomerService, private authService:AuthService,private datePipe: DatePipe) { }


  async addCustomer()
  {

    if(!this.CustomerExist)
    {
      let customer = {
        ID: +this.IDFormControl.value,
      title:this.titeFormcontrol.value,
      first_name: this.firstNameFormControl.value,
      last_name:this.lastNameFormControl.value,
      embossed_name: this.embossedNameFormControl.value,
      NID: this.NIDFormControl.value,
      passport: this.passportFormControl.value,
      email: this.embossedNameFormControl.value,
      birthdate:this.datePipe.transform(this.birthDateFormControl.value, 'yyyy-MM-dd'),
      mobile_ISD:this.ISDFormcontrol.value,
      mobile:this.mobileFormControl.value,
      birth_Country:this.birthCountryFormcontrol.value,
      nationality:this.nationalFormcontrol.value,
      gender: this.genderFormcontrol.value,
      passport_expiry_date: this.datePipe.transform(this.expDateFormControl.value, 'yyyy-MM-dd')
        
      }
      console.log(this.customerForm);
      //this.Tab = 1;
      if (this.customerForm.valid) {
       await this.customerService.addCustomer(customer).toPromise().then(
         (data) => {
           this.authService.setToken(data.body.accessToken);
        }
       ).catch((e) => 
       { console.log(e);
         this.SubmitErrorMessage = e.body.message;
        this.authService.setToken(e.body.accessToken); })
        console.log('form submitted');
      } else {
        console.log(this.customerForm.errors);
      }
    }
    else
    {
      ++this.Tab;
    }


  }
  async getCustomer()
  {
    this.setSubmitButtonText();
    this.disableForms();
    //this.DisableCustomerDetailesFlag = false;
    if(this.IDFormControl.errors)
    {
      return;
    }
  
    //this.DisableCustomerDetailesFlag =true;
    this.Customer_ID = this.IDFormControl.value;

    
    if(this.Customer_ID.toString().length >=6)
    {

      await this.customerService.getCustomer(this.Customer_ID).toPromise().then((data) => {
       this.titeFormcontrol.setValue(data.body.customer.title.toString());   
       this.firstNameFormControl.setValue(data.body.customer.first_name);
       this.lastNameFormControl.setValue(data.body.customer.last_name);
       this.embossedNameFormControl.setValue(data.body.customer.embossed_name);
       this.NIDFormControl.setValue(data.body.customer.NID);
       this.emailFormControl.setValue(data.body.customer.email);
       this.ISDFormcontrol.setValue(data.body.customer.mobile_ISD);
       this.mobileFormControl.setValue(data.body.customer.mobile);
       this.nationalFormcontrol.setValue(data.body.customer.nationality);
       this.birthCountryFormcontrol.setValue(data.body.customer.birth_Country);
       this.birthDateFormControl.setValue(data.body.customer.birthdate);
       this.passportFormControl.setValue(data.body.customer.passport);
       this.expDateFormControl.setValue(data.body.customer.passport_expiry_date);
       this.genderFormcontrol.setValue(data.body.customer.gender.toString());

       this.authService.setToken(data.body.accessToken);

       this.CustomerExist = true;
       this.AppicationTabFlag = false;
       this.setSubmitButtonText();
      }).catch(
       (e) => {
         this.enableForms();
         this.authService.setToken(e.body.accessToken);
         this.CustomerExist = false;
         this.AppicationTabFlag = true;
         this.setSubmitButtonText();
        }
     );
     //console.log();
    }
    //this.setSubmitButtonText();
    
  }

  customerForm:FormGroup;
  ngOnInit() {


  this.customerForm = new FormGroup({
    IDFormControl: this.IDFormControl,
    emailFormControl: this.emailFormControl,
    firstNameFormControl:this.firstNameFormControl,
    lastNameFormControl:this.lastNameFormControl,
    NIDFormControl:this.NIDFormControl,
    mobileFormControl:this.mobileFormControl,
    ISDFormcontrol:this.ISDFormcontrol,
    embossedNameFormControl:this.embossedNameFormControl,
    nationalFormcontrol: this.nationalFormcontrol,
    birthCountryFormcontrol: this.birthCountryFormcontrol,
    birthDateFormControl: this.birthDateFormControl,
    passportFormControl:this.passportFormControl,
    expDateFormControl:this.expDateFormControl,
    titeFormcontrol:this.titeFormcontrol,
    genderFormcontrol:this.genderFormcontrol
    
  })
  }

  enableForms()
  {
    //this.IDFormControl.enable();
    this.emailFormControl.enable();
    this.firstNameFormControl.enable();
    this.lastNameFormControl.enable();
    this.NIDFormControl.enable();
    this.mobileFormControl.enable();
    this.ISDFormcontrol.enable();
    this.embossedNameFormControl.enable();
    this.nationalFormcontrol.enable();
    this.birthCountryFormcontrol.enable();
    this.birthDateFormControl.enable();
    this.passportFormControl.enable();
    this.expDateFormControl.enable();
    this.accountNumberFormControl.enable();
    this.titeFormcontrol.enable();
    this.genderFormcontrol.enable();
  }

  disableForms()
  {
    //this.IDFormControl.disable();
    this.emailFormControl.disable();
    this.firstNameFormControl.disable();
    this.lastNameFormControl.disable();
    this.NIDFormControl.disable();
    this.mobileFormControl.disable();
    this.ISDFormcontrol.disable();
    this.embossedNameFormControl.disable();
    this.nationalFormcontrol.disable();
    this.birthCountryFormcontrol.disable();
    this.birthDateFormControl.disable();
    this.passportFormControl.disable();
    this.expDateFormControl.disable();
    this.accountNumberFormControl.disable();
    this.titeFormcontrol.disable();
    this.genderFormcontrol.disable();

    this.emailFormControl.setValue('');
    this.firstNameFormControl.setValue('');
    this.lastNameFormControl.setValue('');
    this.NIDFormControl.setValue('');
    this.mobileFormControl.setValue('');
    this.ISDFormcontrol.setValue('');
    this.embossedNameFormControl.setValue('');
    this.nationalFormcontrol.setValue('');
    this.birthCountryFormcontrol.setValue('');
    this.birthDateFormControl.setValue('');
    this.passportFormControl.setValue('');
    this.expDateFormControl.setValue('');
    this.accountNumberFormControl.setValue('');
    this.titeFormcontrol.setValue('');
    this.genderFormcontrol.setValue('');
  }

  IDFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(7),
    Validators.minLength(7),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  emailFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required,
    Validators.email
  ]);

  firstNameFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required,
    Validators.maxLength(15)
  ]);
  lastNameFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required,
    Validators.maxLength(15),
    
  ]);

  NIDFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required,
    Validators.maxLength(12),
    Validators.minLength(12),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
  ]);

  mobileFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required,
    Validators.maxLength(9),
    Validators.minLength(9),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);

  embossedNameFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required,
    Validators.maxLength(26)
  ]);

  passportFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required,
    Validators.maxLength(15)
  ]);
  
  birthDateFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required
  ]);

  expDateFormControl = new FormControl({value: '', disabled: true}, [
    Validators.required
  ]);

  titeFormcontrol = new FormControl({value: '', disabled: true}, [
    Validators.required
  ]);

  ISDFormcontrol = new FormControl({value: '', disabled: true}, [
    Validators.required
  ]);

  nationalFormcontrol = new FormControl({value: '', disabled: true}, [
    Validators.required
  ]);

  birthCountryFormcontrol = new FormControl({value: '', disabled: true}, [
    Validators.required
  ]);

  genderFormcontrol = new FormControl({value: '', disabled: true}, [
    Validators.required
  ]);

  accountNumberFormControl = new FormControl({value: ''}, [
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

  setSubmitButtonText()
  {
    if(this.CustomerExist)
    {
      this.SubmitButtonText ='Next';
      return;
    }
    this.SubmitButtonText = 'Add';
  }
}
