import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './administrativo.component.html';
import style from './administrativo.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'administrativo',
	template,
	styles: [ style ]
})
export class AdministrativoenComponent  {
	constructor() {}
}
