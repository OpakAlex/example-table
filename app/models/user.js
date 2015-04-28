import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  country: DS.attr('string'),
  email: DS.attr('string'),
  first_name: DS.attr('string'),
  hashed_password: DS.attr('string'),
  hotel: DS.belongsTo('hotel', {async: true}),
  hotelUsername: DS.attr('string'),
  image: DS.attr('string'),
  last_name: DS.attr('string'),
  permissionsId: DS.attr('json'),
  salt: DS.attr('string'),
  state: DS.attr('string'),
  street: DS.attr('string'),
  username: DS.attr('string'),
  zip: DS.attr('string'),
  isReceptionist: DS.attr('boolean'),
  isMaintenance: DS.attr('boolean'),
  isInspector: DS.attr('boolean'),
  isBypassAttendant: DS.attr('boolean'),
  isAttendant: DS.attr('boolean'),
  isAdministrator: DS.attr('boolean'),
  language: DS.attr('string'),
  role: DS.attr('number'),
  status: DS.attr('string')
});
