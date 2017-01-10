import { Component, OnInit, Input } from '@angular/core';
import { UsersApiService } from '../shared/services/usersApi.service';

@Component({
     selector: 'officers-page',
    templateUrl: '../app/officers/officers.component.html',
    styles: [`
        th {
            font-size: 16px;
            text-align: center;
        }
        td {
            text-align: center;
            vertical-align: middle;
        }
        .modalofficers {
            margin-top: 14%;
        }
        .inputofficer {
            width: 100%;
            padding-left: 13px;
        }
        .rowofficer {
            margin-bottom: 10px;
        }
        .panelofficers {
            margin-top: 3%;
        }
    `]
})

export class OfficersComponent {

    users: any[];
    modalData: any[];
    index: number;

    constructor(private userService: UsersApiService) {}
    ngOnInit() {
        this.userService.getUser().subscribe((result) => {
            this.users = result;
        });
    }
    editModal(item: any, i: number) {
        this.modalData = item;
    }
    onSubmit(form: any, item: any): void {
        
        //this.modalData.Lastname = form.Lastname;
        //this.modalData.Firstname = form.Firstname;
        //this.modalData.email = form.Email;
        //this.modalData.Id_grade = form.Gradelevel;
        //this.userService.postUser(form.nom, form.prenom, form.grade, form.email, form.prenom).subscribe((result) => {
        //    if (result) {
        //        this.router.navigate(['']);
        //    }
        //});
    }
    deleteFunction(item: any) {
      console.log(item._id);
      this.userService.deleteUser(item._id).subscribe((result) => {
      if (result) {
        console.log("delete crime");
      }
    });
  }
}