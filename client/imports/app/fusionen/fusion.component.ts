import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './fusion.component.html';
import style from './fusion.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'fusion',
	template,
	styles: [ style ]
})
export class FusionenComponent  {
	constructor() {}
}
