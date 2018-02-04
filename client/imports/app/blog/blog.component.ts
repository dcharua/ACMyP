import { Component, HostListener, OnInit} from '@angular/core';
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
export class BlogComponent implements OnInit {
	public art0: any;
	public art1: any;
	public art2: any;
	public art3: any;
	public art4: any;
	public art5: any;

	articleSub: Subscription;
	articles: any;
	error: string;
	public article: Article;
	public quotesArray;
	constructor() {

	}
	ngOnInit(){
		this.art0="";
		this.art1="";
		this.art2="";
		this.art3="";
		this.art4="";
		this.art5="";

		this.articleSub = MeteorObservable.subscribe('articles').subscribe(()=>{
			Tracker.autorun(() => {
				this.articles = Articles.find({}, {sort:{date: -1}, limit: 6 }).fetch();
				this.art0 = this.articles[0];
				this.art0.text = this.art0.text.substring(0, 70) + '...';
				this.art0.title = this.art0.title.substring(0, 27) + '..';

				this.art1 = this.articles[1];
				this.art1.text = this.art1.text.substring(0, 450) + '...';
				this.art1.title = this.art1.title.substring(0, 30) + '..';


				this.art2 = this.articles[2];
				this.art2.text = this.art2.text.substring(0, 450) + '...';
				this.art2.title = this.art2.title.substring(0, 30) + '..';


				this.art3 = this.articles[3];
				this.art3.text = this.art3.text.substring(0, 450) + '...';
				this.art3.title = this.art3.title.substring(0, 30) + '..';


				this.art4 = this.articles[4];
				this.art4.text = this.art4.text.substring(0, 450) + '...';
				this.art4.title = this.art4.title.substring(0, 30) + '..';

				this.art5 = this.articles[5];
				this.art5.text = this.art5.text.substring(0, 450) + '...';
				this.art5.title = this.art5.title.substring(0, 30) + '..';
			});
		});
 }
}
