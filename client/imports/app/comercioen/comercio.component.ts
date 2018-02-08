import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './comercio.component.html';
import style from './comercio.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'comercio',
	template,
	styles: [ style ]
})
export class ComercioenComponent  {
	constructor() {}
}
