import { Component, HostListener, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';
import {Articles} from '../../../../both/collections/articles.collections';
import {Article} from '../../../../both/models/article.model';
import template from './article.component.html';
import style from './article.component.scss';
import '../../../../public/scripts/jquery.fullpage.min.js';
declare var $:any;
declare var moment:any;

@Component({
	selector: 'article',
	template,
	styles: [ style ]
})

export class ArticleComponent implements OnInit, OnDestroy {
	articleSub: Subscription;
	articles: any;
  id: any;
  private sub: any;
	article:any

  constructor(private route: ActivatedRoute,
	private router: Router) {}

  ngOnInit() {
		this.article="";
    this.sub = this.route.params.subscribe(params => {
			 this.id = params['id'];
			 this.articleSub = MeteorObservable.subscribe('articles').subscribe(()=>{
	 			this.article = Articles.findOne({_id:this.id});
				this.article.date = this.article.date;
	 		});
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
