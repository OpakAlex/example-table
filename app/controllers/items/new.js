import Ember from 'ember';
import fileUploadMixin from 'lost-found/mixins/create-image';

export default Ember.Controller.extend(fileUploadMixin,{
  needs: ["items"],

  actions: {
    save: function(){
      var self = this;
      this.get('model').save().then(function(item){
        self.get('controllers.items.lostItems').pushObject(item);
        self.transitionToRoute("items.index");
      });
    }
  }
});
