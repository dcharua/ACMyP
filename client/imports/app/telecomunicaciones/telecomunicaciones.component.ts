import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './telecomunicaciones.component.html';
import style from './telecomunicaciones.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'telecomunicaciones',
	template,
	styles: [ style ]
})
export class TelecomunicacionesComponent  {
	constructor() {}
}
