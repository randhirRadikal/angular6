import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BlankComponent } from './blank';
import { ProjectComponent } from './project';
import { DashboardComponent } from './dashboard';
import { MessageComponent } from './message';
import { ContactComponent } from './contact';
import { ProfileComponent } from './profile';
import { SettingComponent } from './setting';
import { InboxComponent } from './inbox';
import { CreditsComponent } from './credits';
import { CoursesComponent } from './courses';
import { PatientComponent } from './patient';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        BlankComponent,
        ProjectComponent,
        MessageComponent,
        InboxComponent,
        ContactComponent,
        ProfileComponent,
        SettingComponent,
        DashboardComponent,
		CreditsComponent,
		CoursesComponent,
		PatientComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
