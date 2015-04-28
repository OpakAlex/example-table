import applicationAdapter from './application';

export default applicationAdapter.extend({
  buildURL: function(typeKey, id, snapshot, type){
    var url = this._super(typeKey, null, snapshot, type);
    url += "/%@".fmt(this.store.get('hotelID'));
    if (id){
      url += "/%@".fmt(id);
    }
    return url;
  }
});
