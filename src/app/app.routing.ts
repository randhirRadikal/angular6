import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from './patient';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BlankComponent } from './blank';
import { ProjectComponent } from './project';
import { DashboardComponent } from './dashboard';
import { MessageComponent } from './message';
import { InboxComponent } from './inbox';
import { ContactComponent } from './contact';
import { ProfileComponent } from './profile';
import { SettingComponent } from './setting';
import { CreditsComponent } from './credits';
import { CoursesComponent } from './courses';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'blank', component: BlankComponent, canActivate: [AuthGuard] },
    { path: 'patient', component: PatientComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: ProjectComponent, canActivate: [AuthGuard] },
    { path: 'message', component: MessageComponent, canActivate: [AuthGuard] },
    { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] },
    { path: 'my_credits', component: CreditsComponent, canActivate: [AuthGuard] },
    { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },

    // otherwise redirect to blank
    { path: '**', redirectTo: 'blank' }
];

export const routing = RouterModule.forRoot(appRoutes);
