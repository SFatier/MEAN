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
require("rxjs/add/operator/map");
var UsersApiService = (function () {
    function UsersApiService(http) {
        this.http = http;
        this.postResult = false;
        // this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UsersApiService.prototype.postUser = function (nom, prenom, grade, email, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log(email);
        return this.http
            .post('http://localhost:3002/post-user', JSON.stringify({ nom: nom, prenom: prenom, grade: grade, email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                _this.postResult = true;
            }
            return res.success;
        });
    };
    UsersApiService.prototype.getUser = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .get('http://localhost:3002/find-user')
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        });
    };
    UsersApiService.prototype.deleteUser = function (idUser) {
        var _this = this;
        console.log(idUser);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .delete('http://localhost:3002/delete-user/' + idUser)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.success) {
                _this.postResult = true;
            }
            return console.log(res.success);
        });
    };
    return UsersApiService;
}());
UsersApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersApiService);
exports.UsersApiService = UsersApiService;
//# sourceMappingURL=usersApi.service.js.map