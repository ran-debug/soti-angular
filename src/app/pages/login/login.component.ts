import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginform = new FormGroup({
  //   email: new FormControl('abc@gmail.com'),
  //   password: new FormControl('123')
  // })


  classResponse = '';
  classAlert = '';
  constructor(private fb: FormBuilder, private auth: AuthService,private router : Router) { }

  loginform = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  });

  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password');
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.auth.postlogin(this.loginform.value).subscribe((response: any) => {
      //console.log(response);
      this.classResponse = 'Login Successfull , Thank You!!!';
      this.classAlert = 'alert-success';
      localStorage.setItem('token' , response.token);
      localStorage.setItem('user' , JSON.stringify(response.user));
      this.router.navigateByUrl('/home');
    },
      (error) => {
        this.classResponse = 'Login failed , Try Again!!!';
        this.classAlert = 'alert-danger';
      })
  }

  
}
