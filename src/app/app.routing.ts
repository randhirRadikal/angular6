import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BlankComponent } from './blank';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'blank', component: BlankComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'blank' }
];

export const routing = RouterModule.forRoot(appRoutes);
