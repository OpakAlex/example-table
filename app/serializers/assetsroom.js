import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.irregular('assetsroom', 'assetsroom');

export default DS.RESTSerializer.extend({
  primaryKey: '_id'
});
