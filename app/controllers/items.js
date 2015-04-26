import Ember from 'ember';
export default Ember.Controller.extend({
  searchLostInput: '',
  searchFoundInput: '',
  lostItems: Ember.computed.oneWay('model.lost'),
  foundItems: Ember.computed.oneWay('model.found'),

  searchFoundInputObserver: function(){
    var reg = new RegExp(this.get('searchFoundInput'));
    if (Ember.isEmpty(this.get('searchFoundInput'))){
      this.set('foundItems', this.get('model.found').toArray().copy());
    }
    else{
      this.set('foundItems', this.get('model.found').filter(function(item){
        return item.get('title').match(reg);
      }));
    }
  }.observes('searchFoundInput'),

  searchLostInputObserver: function(){
    var reg = new RegExp(this.get('searchLostInput'));
    if (Ember.isEmpty(this.get('searchLostInput'))){
      this.set('lostItems', this.get('model.lost').toArray().copy());
    }
    else{
      this.set('lostItems', this.get('model.lost').filter(function(item){
        return item.get('title').match(reg);
      }));
    }
  }.observes('searchLostInput')

});
