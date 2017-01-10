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
var usersApi_service_1 = require("../shared/services/usersApi.service");
var OfficersComponent = (function () {
    function OfficersComponent(userService) {
        this.userService = userService;
    }
    OfficersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (result) {
            _this.users = result;
        });
    };
    OfficersComponent.prototype.editModal = function (item, i) {
        this.modalData = item;
    };
    OfficersComponent.prototype.onSubmit = function (form, item) {
        //this.modalData.Lastname = form.Lastname;
        //this.modalData.Firstname = form.Firstname;
        //this.modalData.email = form.Email;
        //this.modalData.Id_grade = form.Gradelevel;
        //this.userService.postUser(form.nom, form.prenom, form.grade, form.email, form.prenom).subscribe((result) => {
        //    if (result) {
        //        this.router.navigate(['']);
        //    }
        //});
    };
    OfficersComponent.prototype.deleteFunction = function (item) {
        console.log(item._id);
        this.userService.deleteUser(item._id).subscribe(function (result) {
            if (result) {
                console.log("delete crime");
            }
        });
    };
    return OfficersComponent;
}());
OfficersComponent = __decorate([
    core_1.Component({
        selector: 'officers-page',
        templateUrl: '../app/officers/officers.component.html',
        styles: ["\n        th {\n            font-size: 16px;\n            text-align: center;\n        }\n        td {\n            text-align: center;\n            vertical-align: middle;\n        }\n        .modalofficers {\n            margin-top: 14%;\n        }\n        .inputofficer {\n            width: 100%;\n            padding-left: 13px;\n        }\n        .rowofficer {\n            margin-bottom: 10px;\n        }\n        .panelofficers {\n            margin-top: 3%;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [usersApi_service_1.UsersApiService])
], OfficersComponent);
exports.OfficersComponent = OfficersComponent;
//# sourceMappingURL=officers.component.js.map