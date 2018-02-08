import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import template from './tecnologia.component.html';
import style from './tecnologia.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'tecnologia',
	template,
	styles: [ style ]
})
export class TecnologiaenComponent  {
	constructor() {}
}
