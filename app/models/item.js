import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  place_title: DS.attr('string'),
  found_on: DS.attr('string'),
  found_by: DS.attr('string'),
  location: DS.attr('string'),
  status: DS.attr('string'),
  item_images: DS.hasMany('item-image', {async: true})
});
