module.exports = function(app) {
  var express = require('express');
  var itemsRouter = express.Router();
  var items = [
      {id: 1, title: 'htc 200', place_title: 'Room 1', found_on: '12.11.2009', found_by: 'Mom', location: 'on tv', status: 'loss', item_image_ids: [1]},
      {id: 2, title: 'htc 300', place_title: 'Room 2', found_on: '13.11.2009', found_by: 'Mom 2', location: 'on phone', status: 'loss', item_image_ids: [2]},
      {id: 3, title: 'baby',    place_title: 'Room 21', found_on: '13.11.2009', found_by: 'garder man', location: 'on phone', status: 'loss', item_image_ids: [3]},
      {id: 4, title: 'girl :)', place_title: 'Room 1', found_on: '10.11.2009', found_by: 'doctor who', location: 'on bed', status: 'loss', item_image_ids: [1]},
      {id: 5, title: 'beer',    place_title: 'Room 4', found_on: '1.11.2009', found_by: 'Lifa Ghons', location: 'on bed', status: 'loss', item_image_ids: [4]},
      {id: 6, title: 'iphone',  place_title: 'Room 4', found_on: '4.11.2009', found_by: 'Alex Jong', location: '', status: 'found', item_image_ids: [4]},
      {id: 7, title: 'macbook', place_title: 'Room 3', found_on: '8.11.2009', found_by: 'Pierre Jong', location: '', status: 'found', item_image_ids: [2]},
      {id: 8, title: 'table',   place_title: 'Room 5', found_on: '9.11.2009', found_by: 'Pierre Jong', location: '', status: 'found', item_image_ids: [3]},
      {id: 9, title: 'picture', place_title: 'Room 10', found_on: '25.11.2009', found_by: 'Pierre Jong', location: '', status: 'found', item_image_ids: [3]},
      {id: 10, title: 'photo',  place_title: 'Room 1', found_on: '2.11.2009', found_by: 'Pierre Jong', location: '', status: 'found', item_image_ids: [4]}
  ];

  itemsRouter.get('/', function(req, res) {
    res.send({
      'items': items.filter(function(item){return item.status === req.query.type;})
    });
  });

  itemsRouter.post('/', function(req, res) {
    res.send({
      'item': items.filter(function(item){return Number(item.id) === 5;})[0]
    });
  });

  itemsRouter.get('/:id', function(req, res) {
    res.send({
      'item': items.filter(function(item){return Number(item.id) === Number(req.params.id);})[0]
    });
  });

  itemsRouter.put('/:id', function(req, res) {
    res.send({
      'item': {
        id: req.params.id
      }
    });
  });

  itemsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/items', itemsRouter);
};
