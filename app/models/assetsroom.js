import DS from 'ember-data';

export default DS.Model.extend({
  room: DS.attr('string'),
  hotelId: DS.attr('string'),
  asset: DS.attr('json'),
  assetStatus: DS.attr('string'),
  lastDate: DS.attr('date'),
  assetType: DS.attr('string')
});
