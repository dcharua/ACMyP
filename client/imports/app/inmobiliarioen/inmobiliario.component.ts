import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './inmobiliario.component.html';
import style from './inmobiliario.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'inmobiliario',
	template,
	styles: [ style ]
})
export class InmobiliarioenComponent  {
	constructor() {}
}
