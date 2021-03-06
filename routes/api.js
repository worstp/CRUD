var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros', Superhero);


router.get('/superheros', function(req, res) {
  Superhero.find(function(err, superheros){
    console.log(superheros)
    res.render(
      'api',
      {title : 'Superhero API', superheros : superheros}
    );
  });
});

router.post('/superheros', function(req, res) {
  new Superhero({name : req.body.name})
  .save(function(err, superhero) {
    console.log(superhero)
    res.redirect('/api/superheros');
  });
});

module.exports = router;