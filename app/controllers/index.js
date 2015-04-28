import Ember from 'ember';
export default Ember.Controller.extend({
  hotel: Ember.computed.alias('model.hotel')

});
