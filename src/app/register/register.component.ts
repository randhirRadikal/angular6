import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            surnames: ['', Validators.required],
            email: ['', Validators.required],
            professional_record: ['', Validators.required],
            retype_email: ['', Validators.required],
            bcrn: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
		var data = {
			name:this.f.first_name.value+"--"+this.f.last_name.value,
			email:this.f.email.value,
			password:this.f.password.value,
			cpf:this.f.bcrn.value,
			councilreg:this.f.professional_record.value,
			zip:this.f.zip.value,
			street:this.f.street.value,
			number:this.f.professional_record.value,
			complement:this.f.complement.value,
			neighborhood:this.f.neighborhood.value,
			city:this.f.city.value,
			district:this.f.state.value
		}
		console.log(data);
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
