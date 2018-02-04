import { Meteor } from 'meteor/meteor';
import {Articles} from '../../../both/collections/articles.collections';

Meteor.publish('articles', () => Articles.find());
