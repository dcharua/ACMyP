import { Component, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';
import {Articles} from '../../../../both/collections/articles.collections';
import {Article} from '../../../../both/models/article.model';
import template from './blog.component.html';
import style from './blog.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'blog',
	template,
	styles: [ style ]
})
export class BlogComponent  {
	articleSub: Subscription;
	articles: any;
	error: string;
	public quotesArray;
	constructor() {
		this.articleSub = MeteorObservable.subscribe('articles').subscribe(()=>{
				this.articles = Articles.find({}, {sort:{date: -1}}).fetch();
				console.log(this.articles[0].autor);
		});
	}
}
