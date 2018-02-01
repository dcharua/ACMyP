import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './privacidad.component.html';
import style from './privacidad.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'privacidad',
	template,
	styles: [ style ]
})
export class PrivacidadComponent  {
	constructor() {}
}
