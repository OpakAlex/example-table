import Ember from 'ember';
import fileUploadMixin from 'lost-found/mixins/create-image';

export default Ember.Controller.extend(fileUploadMixin,{
  actions: {
    save: function(){
      var self = this;
      this.get('model').save().then(function(){
        self.transitionToRoute("items.index");
      });
    }
  }
});
