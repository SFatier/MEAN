import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficersComponent } from './officers/officers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CrimesComponent } from './crimes/crimes.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/services/logged-in.guard';
import { NewCrimeComponent } from './new-crime/new-crime.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
    { path: 'about', loadChildren:'app/about/about.module#AboutModule', canActivate: [LoggedInGuard] },
    { path: 'new-profile', component: NewProfileComponent, canActivate: [LoggedInGuard]  },
    { path: 'new-crime', component: NewCrimeComponent, canActivate: [LoggedInGuard] },
    { path: 'crimes', component: CrimesComponent, canActivate: [LoggedInGuard] },
    { path: 'officers', component: OfficersComponent, canActivate: [LoggedInGuard] },
    { path: '', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);