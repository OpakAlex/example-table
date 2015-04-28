import DS from 'ember-data';
export default DS.Model.extend({
  code: DS.attr('string'),
  hotelId: DS.attr('string'),
  label: DS.attr('string'),
  lastDate: DS.attr('string'),
  color: DS.attr('string')
});
