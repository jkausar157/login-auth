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
    this.loadUser();
  }

  dataSource: any;
  userlist: any;
  @ViewChild(MatPaginator)paginator !:MatPaginator;
  @ViewChild(MatSort)sort !:MatSort;
  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'role',
    'status',
    'action',
  ];
  
 
  loadUser() {
    this.service.getAll().subscribe((res) => {
      this.userlist = res;
      // console.log(res);
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  UpdateUser(code: any) {
    const popup =   this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data:{
        usercode:code
      }
    });
    // this.openDialog('100ms','600ms',code)
    popup.afterClosed().subscribe(res=>{
      this.loadUser();
    });
    
  }

  openDialog(){
  
  
   
     
      
 
  }


}
