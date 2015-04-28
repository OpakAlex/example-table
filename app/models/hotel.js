import DS from 'ember-data';

export default DS.Model.extend({
  admin: DS.attr('string'),
  city: DS.attr('string'),
  country: DS.attr('string'),
  images: DS.attr('string'),
  name: DS.attr('string'),
  organizationEmail: DS.attr('string'),
  phone: DS.attr('string'),
  remarks: DS.attr('string'),
  state: DS.attr('string'),
  street: DS.attr('string'),
  username: DS.attr('string'),
  zip: DS.attr('string'),
  departureMultiplier: DS.attr('number'),
  stayMultiplier: DS.attr('number'),
  vacantMultiplier: DS.attr('number'),
  creditMinutes: DS.attr('number'),
  isHideGuestInfo: DS.attr('boolean'),
  isAllNightly: DS.attr('boolean'),
  isOCCNightly: DS.attr('boolean'),
  organizations: DS.attr('json'),
  floors: DS.attr('json'),
  users: DS.attr('json'),
  notes: DS.attr('json'),

  rooms: function(){
    return this.store.find('room', {hotel: this.get('id')});
  }.property('id'),

  roomStatuses: function(){
    return this.store.find('room-status', {hotel: this.get('id')});
  }.property('id'),

  roomHousekeepings: function(){
    return this.store.find('room-housekeeping', {hotel: this.get('id')});
  }.property('id')
});
