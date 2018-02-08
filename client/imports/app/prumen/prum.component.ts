import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './prum.component.html';
import style from './prum.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'prum',
	template,
	styles: [ style ]
})
export class PrumenComponent  {
	constructor() {}
}
