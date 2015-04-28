import DS from 'ember-data';
export default  DS.Model.extend({
  roomCategory: DS.attr('json'),
  floor: DS.attr('json'),
  roomAccess: DS.attr('json'),
  hotelId: DS.attr('string'),
  roomMaintenance: DS.attr('string'),
  description: DS.attr('string'),
  roomHousekeeping: DS.attr('json'),
  roomStatus: DS.attr('json'),
  name: DS.attr('string'),
  isGuestIn: DS.attr('boolean'),
  attendantStatus: DS.attr('string'),
  lastDate: DS.attr('date'),
  overwriteCredits: DS.attr('string'),
  comment: DS.attr('string'),
  roomAreas: DS.attr('json'),
  catalogs: DS.attr('json'),
  assets: DS.attr('json')
});
