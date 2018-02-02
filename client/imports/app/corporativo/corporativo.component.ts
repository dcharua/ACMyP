import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './corporativo.component.html';
import style from './corporativo.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'corporativo',
	template,
	styles: [ style ]
})
export class CorporativoComponent  {
	constructor() {}
}
