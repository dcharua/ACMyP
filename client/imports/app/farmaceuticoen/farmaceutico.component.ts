import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './farmaceutico.component.html';
import style from './farmaceutico.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'farmaceutico',
	template,
	styles: [ style ]
})
export class FarmaceuticoenComponent  {
	constructor() {}
}
