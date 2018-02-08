import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './macias.component.html';
import style from './macias.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'macias',
	template,
	styles: [ style ]
})
export class MaciasenComponent  {
	constructor() {}
}
