import Ember from 'ember';
import applicationAdapter from './application';

export default applicationAdapter.extend({
  pathForType: function(type) {
    var decamelized = Ember.String.decamelize(type);
    return decamelized;
  }
});
