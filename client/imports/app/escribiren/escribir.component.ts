import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InjectUser } from "angular2-meteor-accounts-ui";
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';
import {Articlesen} from '../../../../both/collections/articlesen.collections';
import {Articleen} from '../../../../both/models/articleen.model';
import { Tracker } from 'meteor/tracker'
import template from './escribir.component.html';
import style from './escribir.component.scss';
declare var moment:any;
declare var $:any;
declare var google:any;


@Component({
	selector: 'escribir',
	template,
	styles: [ style ]
})
@InjectUser("user")


export class EscribirenComponent implements OnInit {
  escribirForm: FormGroup;
	articleSub: Subscription;
	articles: Observable<Articleen[]>;
  error: string;
	public articlesArray;


  constructor(private router: Router, private formBuilder: FormBuilder) {
		this.articleSub = MeteorObservable.subscribe('articlesen').subscribe(()=>{
			Tracker.autorun(() => {
				this.articles= Articlesen.find({}, {sort:{date: -1}}).zone();
			});
		});
	}

  ngOnInit() {
		if (!Meteor.userId() ) {
			this.router.navigate(['/'])
		}

    this.escribirForm = this.formBuilder.group({
		  autor: ['', Validators.required],
      text: ['', Validators.required],
			title: ['', Validators.required],
    });

    this.error = '';
  }

  escribir() {
    if (this.escribirForm.valid) {
			Articlesen.collection.insert({
				autor: this.escribirForm.controls.autor.value,
				text: this.escribirForm.controls.text.value,
				title: this.escribirForm.controls.title.value,
				date: moment().format(),
				fecha: moment().format('LL'),
			})
    }
  }

	closeNav(){
	 $("div#error").css({"display":"none"});
	}

	borrar(id){
		Articlesen.remove(id);
	}
}
