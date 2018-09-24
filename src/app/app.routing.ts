import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
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
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'blank', component: BlankComponent, canActivate: [AuthGuard] },
    { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'message', component: MessageComponent, canActivate: [AuthGuard] },
    { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] },

    // otherwise redirect to blank
    { path: '**', redirectTo: 'blank' }
];

export const routing = RouterModule.forRoot(appRoutes);
