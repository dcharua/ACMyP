import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './propiedad.component.html';
import style from './propiedad.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'propiedad',
	template,
	styles: [ style ]
})
export class PropiedadenComponent  {
	constructor() {}
}
