import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginwithgoogle(){
    alert("You have pressed Login with Google")
  }
  formdata:FormGroup;
  constructor(private formbuilder:FormBuilder) {
    this.formdata=this.formbuilder.group({
      email: new FormControl('', Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]) ),
      password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(8)]) ),
      confirmPassword: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    },
    {
      validators:this.mustMatch('password','confirmPassword')
    }
    )
   }
   get f(){
    return this.formdata.controls;
   }
   mustMatch(password:any,confirmPassword:any){
    return (formGroup:FormGroup)=>{
    const passwordControl = formGroup.controls[password];
    const confirmPasswordControl = formGroup.controls[confirmPassword];

    if(confirmPasswordControl.errors && !confirmPasswordControl.errors['mustMatch']){
      return;
    }
    if(passwordControl.value!==confirmPasswordControl.value){
      confirmPasswordControl.setErrors({mustMatch:true});
    }else{
      confirmPasswordControl.setErrors(null);
    }

    }
   }

  ngOnInit(): void {  
}
onSubmit(){
  if(this.formdata.valid){           
    return;
  }
}
}
