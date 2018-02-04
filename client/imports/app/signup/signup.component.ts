import { Component, OnInit,  NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InjectUser } from "angular2-meteor-accounts-ui";
import { Router } from '@angular/router';
import template from './signup.component.html';
import style from './signup.component.scss';
declare var $:any;
declare var google:any;


@Component({
	selector: 'signup',
	template,
	styles: [ style ]
})
@InjectUser("user")


export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: string;


  constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder) {}

  ngOnInit() {
		// if (!Meteor.userId() ) {
		// 	this.router.navigate(['/'])
		// }else{
		// 	if(Meteor.userId()!="jAnsE9itppaCMiug8"){
		// 		this.router.navigate(['/'])
		// 	}
		// }

    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = '';
  }

  signup() {
    if (this.signupForm.valid) {
      Accounts.createUser({
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      }, (err) => {
        if (err) {
          this.zone.run(() => {
            this.error = err;
						 $("div#error").css({"display":"block"});
          });
        } else {
          this.router.navigate(['/blog']);
        }
      });
    }
  }

	closeNav(){
	 $("div#error").css({"display":"none"});
	}
}
