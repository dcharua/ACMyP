import { Meteor } from 'meteor/meteor';
import {Articlesen} from '../../../both/collections/articlesen.collections';

Meteor.publish('articlesen', () => Articlesen.find());
