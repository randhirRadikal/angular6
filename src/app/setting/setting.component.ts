import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'setting.component.html'})
export class SettingComponent implements OnInit {
    currentUser: User;
    users: any;
    isUserLogin=false;
    searchForm: FormGroup;
    profileForm: FormGroup;
    submitted= false;
    loading= false;
	newPasswordNotMatch = false;
	selectedFile: File;

    constructor(private userService: UserService,  private formBuilder: FormBuilder,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            password: ['', Validators.required],
            new_password: ['', Validators.required],
            confirm_password: ['', Validators.required]
        });
		this.profileForm = this.formBuilder.group({
            first_name: ['', Validators.required],
        	surnames: ['', Validators.required],
        	email: ['', Validators.required],
        });
        this.loadAllUsers();
    }

    get f() { return this.searchForm.controls; }

	get user() { return this.profileForm.controls; }

    private loadAllUsers() {
        this.userService.getUserDetails().pipe(first()).subscribe(users => {
            this.users = users;
        },err=>{

		});
    }

    onSearch() {
        this.submitted = true;
        alert(1);
    }

	changePassword(){
		this.submitted = true;
		this.newPasswordNotMatch = false;
        // stop here if form is invalid
        if (this.searchForm.invalid) {
            return;
        }

		if(this.f.new_password.value != this.f.confirm_password.value){
			this.newPasswordNotMatch = true;
			return;
		}
		this.loading = true;
		this.userService.changePassword(this.f.new_password.value).pipe(first()).subscribe(users => {
            console.log(users);
			this.loading = false;
        },error=>{
			console.log(error);
		});
	}

	onFileChanged(event) {
	    this.selectedFile = event.target.files[0]
	}

	onUpload() {
	    console.log(this.selectedFile);
		var data = {
			"first_name":this.user.first_name.value,
			"surnames":this.user.surnames.value,
			"email":this.user.email.value,
			"image":this.selectedFile
		};
		console.log(data);
		if(this.profileForm.invalid){
			return;
		}


		return false;
		this.userService.updateProfile(data).pipe(first()).subscribe(users => {
            console.log(users);
			this.loading = false;
        },error=>{
			console.log(error);
		});
	}
}
