"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// import { of } from 'rxjs/observable/of';
// import { map } from 'rxjs/operator/map';
require("rxjs/add/operator/map");
var CrimesApiService = (function () {
    function CrimesApiService(http) {
        this.http = http;
        // private loggedIn = false;
        this.postResult = false;
        // this.loggedIn = !!localStorage.getItem('auth_token');
    }
    CrimesApiService.prototype.getcrimes = function (currentPage, itemsTotal) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .get('http://localhost:3002/crimes/' + currentPage + '/' + itemsTotal)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
            }
            return res;
        });
    };
    CrimesApiService.prototype.postcrime = function (compnos, naturecode, incident_type_description, main_crimecode, reptdistrict, reportingarea, fromdate, weapontype, shooting, domestic, shift, year, month, day_week, ucrpart, x, y, streetname, xstreetname, location_crime) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://localhost:3002/post-crime', JSON.stringify({ compnos: compnos, naturecode: naturecode, incident_type_description: incident_type_description, main_crimecode: main_crimecode, reptdistrict: reptdistrict,
            reportingarea: reportingarea, fromdate: fromdate, weapontype: weapontype, shooting: shooting, domestic: domestic, shift: shift, year: year, month: month, day_week: day_week,
            ucrpart: ucrpart, x: x, y: y, streetname: streetname, xstreetname: xstreetname, location_crime: location_crime }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                _this.postResult = true;
            }
            return console.log(res.success);
        });
    };
    CrimesApiService.prototype.deleteCrime = function (idCrime) {
        var _this = this;
        console.log(idCrime);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .delete('http://localhost:3002/delete-crime/' + idCrime)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                _this.postResult = true;
            }
            return console.log(res.success);
        });
    };
    return CrimesApiService;
}());
CrimesApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CrimesApiService);
exports.CrimesApiService = CrimesApiService;
//# sourceMappingURL=crimesApi.service.js.map