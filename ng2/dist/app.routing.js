"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var officers_component_1 = require("./officers/officers.component");
var not_found_component_1 = require("./not-found/not-found.component");
var crimes_component_1 = require("./crimes/crimes.component");
var new_profile_component_1 = require("./new-profile/new-profile.component");
var login_component_1 = require("./login/login.component");
var logged_in_guard_1 = require("./shared/services/logged-in.guard");
var new_crime_component_1 = require("./new-crime/new-crime.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule', canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'new-profile', component: new_profile_component_1.NewProfileComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'new-crime', component: new_crime_component_1.NewCrimeComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'crimes', component: crimes_component_1.CrimesComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: 'officers', component: officers_component_1.OfficersComponent, canActivate: [logged_in_guard_1.LoggedInGuard] },
    { path: '', component: login_component_1.LoginComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map