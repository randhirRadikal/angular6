import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'contact.component.html'})
export class ContactComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
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
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    onSearch() {
        this.submitted = true;
        alert(1);
    }
}
