import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { RouteReuseStrategy, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  [x: string]: any;
  constructor(private builder: FormBuilder, private service: AuthService, private route: Router) {

  }
  registerform = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(false),
  });

  proceedregd() {
    if (this.registerform.valid) {
      this.service.proceedRegister(this.registerform.value).subscribe(res => {
        alert("register successfully!!!")
        // console.log("register successfully!!!")
        this.route.navigate(['login']);
      })
    }
    else {
      alert("please enter valid data!!!")
    }
  }



}
