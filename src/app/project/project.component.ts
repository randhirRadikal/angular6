import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'project.component.html'})
export class ProjectComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    isUserLogin=false;
    searchForm: FormGroup;
    submitted= false;
	isFormNumber=1;
	isNewRegister=false;

    constructor(private userService: UserService,  private formBuilder: FormBuilder,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            username: ['', Validators.required]
        });
        this.loadAllUsers();
    }

    get f() { return this.searchForm.controls; }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    onSubmit1() {
        //this.submitted = true;
        this.isFormNumber = 2;
    }
	onSubmit2() {
        //this.submitted = true;
        this.isFormNumber = 3;
    }
	onSubmit3() {
        //this.submitted = true;
        this.isFormNumber = 1;
    }
}
