import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {

	}

	getUserDetails(){
		return this.http.get<any>(`${environment.apiClint}professionals/dashboardInfo`);
	}

	changePassword(password: string){
		return this.http.post(`${environment.apiClint}professionals/changePassword`, {"password":password});
	}

	updateProfile(user: User) {
        return this.http.post(`${environment.apiClint}/users/register`, user);
    }

	getUserDetails() {
        return this.http.get(`${environment.apiClint}professionals/getProfessionalData`);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}
