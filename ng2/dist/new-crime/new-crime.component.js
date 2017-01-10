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
var router_1 = require("@angular/router");
var crimesApi_service_1 = require("../shared/services/crimesApi.service");
var NewCrimeComponent = (function () {
    function NewCrimeComponent(crimeService, router) {
        this.crimeService = crimeService;
        this.router = router;
    }
    NewCrimeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.domestic);
        this.crimeService.postcrime(form.compnos, form.naturecode, form.incident_type_description, form.main_crimecode, form.reptdistrict, form.reportingarea, form.fromdate, form.weapontype, form.shooting, form.domestic, form.shift, form.year, form.month, form.day_week, form.ucrpart, form.x, form.y, form.streetname, form.xstreetname, form.location).subscribe(function (result) {
            if (result) {
                _this.router.navigate(['']);
            }
        });
    };
    return NewCrimeComponent;
}());
NewCrimeComponent = __decorate([
    core_1.Component({
        selector: 'new-crime-page',
        templateUrl: '../app/new-crime/new-crime.component.html'
    }),
    __metadata("design:paramtypes", [crimesApi_service_1.CrimesApiService, router_1.Router])
], NewCrimeComponent);
exports.NewCrimeComponent = NewCrimeComponent;
//# sourceMappingURL=new-crime.component.js.map