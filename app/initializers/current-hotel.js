export default {
  name: 'currentHotel',
  after: 'store',

  initialize: function(container) {
    var store = container.lookup('store:main');
    store.set('hotelID', '5181478a7ee329ce7400001d');
  }
};
