const { Router } = require("express");
const {
  home,
  add_movie,
  edit_movie,
  deletemovie,
  uploadImage,
  addmovie,
  updatemovie,
  login,
  logout,
  checkAuth,
} = require("../controller/movie.controller");

const router = Router();

router.get("/", checkAuth, home);
router.get("/add_movie", checkAuth, add_movie);
router.get("/edit_movie", checkAuth, edit_movie);
router.get("/deletemovie", checkAuth, deletemovie);
router.post("/addmovie", checkAuth, uploadImage, addmovie);
router.post("/edit_movie", checkAuth, uploadImage, updatemovie);

router.get('/login', (req, res) => res.render('login'));
router.post('/login', login);
router.get('/logout', logout);


module.exports = router