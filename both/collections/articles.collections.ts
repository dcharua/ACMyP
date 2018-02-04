import {MongoObservable} from 'meteor-rxjs'
import { Meteor } from 'meteor/meteor';

import {Article} from '../models/article.model';

export const Articles = new MongoObservable.Collection<Article>('articles');


Articles.allow({
  insert: function (userId, doc) {
             return true;
          },

      update: function (userId, doc, fieldNames, modifier) {
             return true;
          },

      remove: function (userId, doc) {
             return true;
          }


});
