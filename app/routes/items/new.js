import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.createRecord('item');
  },

  renderTemplate: function(controller, model){
    this.render("items.new",{ outlet: "modal",
      into: "items",
      controller: "items.new"
    });
  }
});
