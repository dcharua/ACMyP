import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './civil.component.html';
import style from './civil.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'civil',
	template,
	styles: [ style ]
})
export class CivilComponent  {
	constructor() {}
}
