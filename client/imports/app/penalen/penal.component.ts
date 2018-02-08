import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './penal.component.html';
import style from './penal.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'penal',
	template,
	styles: [ style ]
})
export class PenalenComponent  {
	constructor() {}
}
