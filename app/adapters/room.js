import applicationAdapter from './application';

export default applicationAdapter.extend({
  pathForType: function() {
    return 'rooms_by_hotel';
  },
  findQuery: function(store, type, query) {
    var url = this.buildURL(type.typeKey, query.hotel || query, null, 'findQuery');
    delete query.hotel;
    if (this.sortQueryParams) {
      query = this.sortQueryParams(query);
    }
    return this.ajax(url, 'GET', { data: query });
  }
});
