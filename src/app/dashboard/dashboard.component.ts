import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'dashboard.component.html'})
export class DashboardComponent implements OnInit {
    currentUser: User;
    dashboard: any;
    isUserLogin=false;
    searchForm: FormGroup;
    submitted= false;

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
        this.userService.getDashbordInfo().pipe(first()).subscribe(users => {
			console.log(users);
            this.dashboard = users;
			this.submitted = true;
        });
    }

    onSearch() {
        this.submitted = true;
        alert(1);
    }
}
