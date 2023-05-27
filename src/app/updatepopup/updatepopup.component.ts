import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit{
constructor(private builder: FormBuilder, private service: AuthService, private route: Router){}

rolelist:any
  ngOnInit(): void {
   this.service.getAllRole().subscribe(res=>{
this.rolelist=res
   })
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
updateregd(){

}

}
