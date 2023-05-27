import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit{
  data: any;
  editData: any;
constructor(private builder: FormBuilder, private service: AuthService, private route: Router,private dialogref:MatDialogRef<UpdatepopupComponent>){}

rolelist:any
  ngOnInit(): void {
   this.service.getAllRole().subscribe(res=>{
this.rolelist=res
   })

   if(this.data.usercode!=null && this.data.usercode!=''){
    this.loaduserdata(this.data.usercode);
   }
   
   
  }


registerform = this.builder.group({
  id: this.builder.control(''),
  name: this.builder.control(''),
  email: this.builder.control(''),
  password: this.builder.control(''),
  gender: this.builder.control('male'),
  role: this.builder.control('',Validators.required),
  isactive: this.builder.control(false),
});

loaduserdata(code:any){
  this.service.getbycode(this.data.usercode).subscribe(res=>{
    this.editData=res;
    this.registerform.setValue({
      id:this.editData.id,name:this.editData.name,
      password:this.editData.password,email:this.editData.email,
      gender:this.editData.gender,role:this.editData.role,
      isactive:this.editData.isactive
    });
  })
}

updateregd(){
 this.service.updateUser(this.registerform.value.id, this.registerform.value).subscribe(res=>{
  alert("update successfully")
  this.dialogref.close();
 })
}

}
