import { Component,OnInit } from '@angular/core';


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    isUserLogin = false;
    submitted = false;

    constructor(
    ) {

    }

    ngOnInit() {

    }

    ngAfterViewChecked(){
        if (localStorage.getItem('currentUser')) {
          this.isUserLogin = true;
        }else{
          this.isUserLogin = false;
        }
    }

    onSubmit() {

    }
}
