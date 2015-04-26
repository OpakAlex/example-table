module.exports = function(app) {
  var express = require('express');
  var itemImagesRouter = express.Router();

  var items = [
    {id: 1, thumb_url: 'http://www.forangelsonly.org/wp-content/uploads/2012/09/illeana_005.jpg?817de1'},
    {id: 2, thumb_url: 'http://cache3.asset-cache.net/gc/161502898-swimsuit-issue-2013-model-kate-bock-poses-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=GkZZ8bf5zL1ZiijUmxa7QcManakkeNKy9XO5RJQFQNb%2FkAo3V19DkxDUpf4XJ6DpUOW%2FH0NNWxUXNLYEYEuWctg7seRHcCo1%2FFRlrL8cBZY%3D'},
    {id: 3, thumb_url: 'http://www.flash-screen.com/free-wallpaper/uploads/201107/icos/1311919613.jpg'},
    {id: 4, thumb_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3RiC-99Bir4lXB692Zl82iTwSJfE9rW191efTUq96fUdYJheAg'},
    {id: 5, thumb_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SePMZU-wvSD4pyTVNCIiXJaNhUEjPtjGYFhs7RBnxcgXBWVH'}
  ];

  itemImagesRouter.get('/', function(req, res) {
    res.send({
      'item_images': items
    });
  });

  itemImagesRouter.post('/', function(req, res) {
    res.send({
      'item_image': items.filter(function(item){return Number(item.id) === 3;})[0]
    });
  });

  itemImagesRouter.get('/:id', function(req, res) {
    res.send({
      'item_image': items.filter(function(item){return Number(item.id) === Number(req.params.id);})[0]
    });
  });

  itemImagesRouter.put('/:id', function(req, res) {
    res.send({
      'item_image': {
        id: req.params.id
      }
    });
  });

  itemImagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/item_images', itemImagesRouter);
};
