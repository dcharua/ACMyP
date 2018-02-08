import {MongoObservable} from 'meteor-rxjs'
import { Meteor } from 'meteor/meteor';

import {Articleen} from '../models/articleen.model';

export const Articlesen = new MongoObservable.Collection<Articleen>('articlesen');


Articlesen.allow({
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
