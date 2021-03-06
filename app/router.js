import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('items', function(){
    this.route('new', {path: '/new'});
    this.route('edit', {path: '/:id'});
  });
});

export default Router;
