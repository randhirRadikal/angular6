import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';

@Component({templateUrl: 'forgot_password.component.html'})
export class ForgotPasswordComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
	isSuccess = false;
	isError = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
		this.isSuccess = false;
		this.isError = false;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.forgotPassword(this.f.email.value)
            .pipe(first())
            .subscribe(
                data => {
					this.isSuccess = data.data;
					this.loading = false;
                },
                error => {
					this.isError = data.data;
                    this.loading = false;
                });
    }
}
