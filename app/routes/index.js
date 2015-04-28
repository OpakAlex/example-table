import Ember from 'ember';
export default Ember.Route.extend({
  model: function(){
    return this.store.find('user', '53174f6be5cfdddd6c000016');
  }
});
