import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
     createImage: function(file){
        var self = this;
        this._createImage('item-image', file).then(function(asset){
          self._saveToModel(self.get('model'), 'item_images', asset);
        });
     }
  },
  _createImage: function(type, file, params){
      var self = this;
      if (this.get('isImageCreating')){
          return new Ember.RSVP.Promise(function(resolve, reject){
              return reject();
          });
      }
      this.set('isImageCreating', true);
      var options = {
          content_type: file.type,
          original_filename: file.name
      };
      var asset = this.store.createRecord(type, Ember.$.extend(options, params));
      asset.set('file', file);
      return asset.save().then(function(asset){
        return asset;
      }, function(){
          self.set('isImageCreating', true);
      });
  },

  _saveToModel: function(model, property, asset){
      var self = this;
      return model.get(property).then(function(collection){
          var main = collection.find(function(image){
              return image.get('is_main');
          });
          if (!main){
              asset.set('is_main', true);
              asset.save().then(function(){
                  self._addToCollection(model, asset, collection);
              });
          }
          else{
              self._addToCollection(model, asset, collection);
          }
      });
  },

  _addToCollection: function(model, asset, collection){
      var self = this;
      self.set('isImageCreating', false);
      collection.pushObject(asset);
      model.save().then(function(){
          self.set('isImageCreating', false);
      });
  }

});
