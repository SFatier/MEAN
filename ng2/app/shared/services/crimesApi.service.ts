
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { map } from 'rxjs/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class CrimesApiService {
  // private loggedIn = false;
  private postResult = false;

  constructor(private http: Http) {
    // this.loggedIn = !!localStorage.getItem('auth_token');
  }

  getcrimes(currentPage, itemsTotal)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get('http://localhost:3002/crimes/'+currentPage+'/'+itemsTotal)
      .map(res => res.json())
      .map((res) => {
        if (res) {
        }
        return res;
    });
  }
  postcrime(compnos,naturecode,incident_type_description,main_crimecode,reptdistrict,
      reportingarea,fromdate,weapontype,shooting,domestic,shift,year,month,day_week,
      ucrpart,x,y,streetname,xstreetname,location_crime){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
   
      return this.http
         .post(
           'http://localhost:3002/post-crime', 
           JSON.stringify({ compnos,naturecode,incident_type_description,main_crimecode,reptdistrict,
      reportingarea,fromdate,weapontype,shooting,domestic,shift,year,month,day_week,
      ucrpart,x,y,streetname,xstreetname,location_crime }), 
              { headers }
         )
         .map(res => res.json())
         .map((res) => {
          if (res.success) {
             this.postResult = true;
          }
          return console.log(res.success);
     });
  }
  deleteCrime(idCrime){
    console.log(idCrime);
     let headers = new Headers();
      headers.append('Content-Type', 'application/json');
   
      return this.http
         .delete(
           'http://localhost:3002/delete-crime/' + idCrime
         )
         .map(res => res.json())
         .map((res) => {
          if (res.success) {
             this.postResult = true;
          }
          return console.log(res.success);
     }); 
  }
}