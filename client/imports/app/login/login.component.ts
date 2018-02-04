import { Component, OnInit,  NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InjectUser } from "angular2-meteor-accounts-ui";
import { Router } from '@angular/router';
import template from './login.component.html';
import style from './login.component.scss';
declare var $:any;
declare var google:any;


@Component({
	selector: 'login',
	template,
	styles: [ style ]
})


export class LoginComponent implements OnInit  {
	addForm: FormGroup;
	error: string;

	constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder) {}
	ngOnInit() {
    this.addForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = '';
  }

  login() {
    if (this.addForm.valid) {
      Meteor.loginWithPassword(this.addForm.value.email, this.addForm.value.password, (err) => {
        this.zone.run(() => {
          if (err) {
            this.error = err;
						 $("div#error").css({"display":"block"});
          } else {
            this.router.navigate(['/escribir']);
          }
        });
      });
    }
  }

	closeNav(){
	 $("div#error").css({"display":"none"});
	}
}
