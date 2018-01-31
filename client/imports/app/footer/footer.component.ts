import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './footer.component.html';
import style from './footer.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'footer',
	template,
	styles: [ style ]
})
export class FooterComponent  {
	constructor() {}
}
