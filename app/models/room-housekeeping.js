import DS from 'ember-data';

export default DS.Model.extend({
  commonKey: DS.attr('string'),
  hotelId: DS.attr('string'),
  label: DS.attr('string'),
  lastDate: DS.attr('string')
});
