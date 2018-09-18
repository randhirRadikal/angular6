import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BlankComponent } from './blank';
import { ProjectComponent } from './project';
import { DashboardComponent } from './dashboard';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'blank', component: BlankComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'dashboard', component: DashboardComponent },

    // otherwise redirect to blank
    { path: '**', redirectTo: 'blank' }
];

export const routing = RouterModule.forRoot(appRoutes);
