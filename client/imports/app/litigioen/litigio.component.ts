import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './litigio.component.html';
import style from './litigio.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'litigio',
	template,
	styles: [ style ]
})
export class LitigioenComponent  {
	constructor() {}
}
