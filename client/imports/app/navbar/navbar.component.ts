import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import template from './navbar.component.html';
import style from './navbar.component.scss';
import {InjectUser} from "angular2-meteor-accounts-ui";

declare var $:any;

@Component({
	selector: 'navbar',
	template,
	styles: [ style ]
})

@InjectUser('user')

export class NavbarComponent implements OnInit {
	public url: string;
	user: Meteor.User;

	public icons: Array<String>;
	constructor(private router: Router) {}
	ngOnInit(){
		$(".button-collapse").sideNav();
	}

		logout() {
			Meteor.logout();
		}
	}
