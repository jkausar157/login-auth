import { Component, Inject, OnInit } from '@angular/core';
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

  editData: any;
  rolelist:any
constructor(private builder: FormBuilder, private service: AuthService, private route: Router, @Inject(MAT_DIALOG_DATA) public data:any,private dialogref:MatDialogRef<UpdatepopupComponent>){
  // console.log(this.data.usercode);
}


  ngOnInit(): void {
   this.service.getAllRole().subscribe(res=>{
    this.rolelist=res
   })

   if(this.data.usercode!=null && this.data.usercode!=''){
    this.loaduserdata(this.data.usercode);
    this.service.getbyid(this.data.usercode).subscribe(res=>{
      this.editData=res;
      this.registerform.setValue({
        id:this.editData.id,name:this.editData.name,
        password:this.editData.password,
        email:this.editData.email,
        gender:this.editData.gender,
        role:this.editData.role,
        isactive:this.editData.isactive
      })
    })
 
    
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
  
  // this.service.getbyid(this.data.usercode).subscribe(res=>{
    
  //   this.editData=res;
  //   console.log(res);

  //   this.registerform.setValue({
  //     id:this.editData.id,name:this.editData.name,
  //     password:this.editData.password,email:this.editData.email,
  //     gender:this.editData.gender,role:this.editData.role,
  //     isactive:this.editData.isactive
  //   });
  // })
}

updateregd(){
  if(this.registerform.valid){
    this.service.updateUser(this.registerform.value.id,this.registerform.value).subscribe(res=>{
      alert("updated successfully");
      this.dialogref.close();
     })
  }else{
    alert("please select role!!")
  }

}

}
