const { addToLikeMovies, getLikeMovies, removeFromLikeMovie } = require('../controller/UserController');

const router = require('express').Router();

router.post('/add', addToLikeMovies);
router.get('/liked/:email', getLikeMovies);
router.put('/delete',removeFromLikeMovie)


module.exports = router;