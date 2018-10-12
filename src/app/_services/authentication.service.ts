import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
		let headers = new HttpHeaders({
		    'Content-Type': 'application/json',
		    'Authorization': "jkBDVMUQTIdrsVU1eQxy" });
		let options = { headers: headers };
        return this.http.post<any>(`${environment.apiClint}professionals/login`,
			 	{ email: email, password: password },
				options)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
				console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

	register(user: any) {
		let headers = new HttpHeaders({
		    'Content-Type': 'application/json',
		    'Authorization': "jkBDVMUQTIdrsVU1eQxy" });
		let options = { headers: headers };
        return this.http.post<any>(`${environment.apiClint}professionals/register`,
			 	user,
				options)
            .pipe(map(user => {
				if(user){
					return user;
				}else{
					return false;
				}
            }));
    }

	forgotPassword(email: string) {
		let headers = new HttpHeaders({
		    'Content-Type': 'application/json',
		    'Authorization': "jkBDVMUQTIdrsVU1eQxy" });
		let options = { headers: headers };
        return this.http.post<any>(`${environment.apiClint}professionals/forgotPassword`,
			 	{ email: email },
				options)
            .pipe(map(user => {
				if(user){
					return user;
				}else{
					return false;
				}
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
