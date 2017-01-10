import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrimesApiService } from '../shared/services/crimesApi.service';
import { User } from '../shared/models/user'
@Component({
    selector: 'new-crime-page',
    templateUrl: '../app/new-crime/new-crime.component.html'
})
export class NewCrimeComponent {
    constructor(private crimeService: CrimesApiService, private router: Router) {}
     
    onSubmit(form: any): void{
      console.log(form.domestic);
      this.crimeService.postcrime(form.compnos,form.naturecode,form.incident_type_description,
        form.main_crimecode,form.reptdistrict,form.reportingarea,form.fromdate,form.weapontype,
        form.shooting,form.domestic,form.shift,form.year,form.month,form.day_week,form.ucrpart,
        form.x,form.y,form.streetname,form.xstreetname,form.location
        ).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }
}