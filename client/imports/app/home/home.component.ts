import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './home.component.html';
import style from './home.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'home',
	template,
	styles: [ style ]
})
export class HomeComponent  {
	public previousUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {
		this.previousUrl = '.';
	}

}
