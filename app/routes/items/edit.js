import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('item', params.id);
  },

  renderTemplate: function(controller, model){
    this.render("items.edit",{ outlet: "modal",
      into: "items",
      controller: "items.edit"
    });
  }
});
