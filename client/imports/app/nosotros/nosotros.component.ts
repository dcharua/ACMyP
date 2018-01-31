import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './nosotros.component.html';
import style from './nosotros.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'nosotros',
	template,
	styles: [ style ]
})
export class NosotrosComponent  {
	constructor() {}
}
