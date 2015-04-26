import Ember from 'ember';
export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      lost : this.store.find('item', {type: 'loss'}),
      found: this.store.find('item', {type: 'found'})
    });
  }

});
