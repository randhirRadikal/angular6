import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BlankComponent } from './blank';
import { ProjectComponent } from './project';
import { DashboardComponent } from './dashboard';
import { MessageComponent } from './message';
import { InboxComponent } from './inbox';
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

    // otherwise redirect to blank
    { path: '**', redirectTo: 'blank' }
];

export const routing = RouterModule.forRoot(appRoutes);
