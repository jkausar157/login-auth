import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import {MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css'],
})
export class UserListingComponent {
  constructor(private service: AuthService, private dialog:MatDialog ) {
    this.LoadUser();
  }

  dataSource: any;
  userlist: any;
  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'role',
    'status',
    'action',
  ];
  
  @ViewChild(MatPaginator)paginator !:MatPaginator;
  @ViewChild(MatSort)sort !:MatSort;
  LoadUser() {
    this.service.getAll().subscribe((res) => {
      this.userlist = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  UpdateUser(code: any) {
    this.openDialog('100ms','600ms',code)
    
  }

  openDialog(enteranimation:any,exitanimation:any,code:string){
    const popup = this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:'20%',
      data:{
        usercode:code
      }
    });
    popup.afterClosed().subscribe(res=>{
      console.log(res);
      
    })
  }


}
