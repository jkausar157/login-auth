import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private route: Router
  ) {
    sessionStorage.clear();
  }

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  userdata: any;
  proceedlogin() {
    if (this.loginform.valid) {
      this.service.getbyid(this.loginform.value.username).subscribe((res) => {
        alert("login successfully!!")
        this.userdata = res;
        // console.log(res);
        if (this.userdata.password === this.loginform.value.password) {
          if (this.userdata.isactive) {
            sessionStorage.setItem('username', this.userdata.id);
            sessionStorage.setItem('userrole', this.userdata.role);
            this.route.navigate(['']);
          } else {
            alert('Inactive user');
          }
        } else {
          alert('invalid credential');
        }
      });
    }
  }
}
