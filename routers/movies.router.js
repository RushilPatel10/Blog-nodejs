const { Router } = require("express");
const {
  home,
  add_movie,
  edit_movie,
  deletemovie,
  uploadImage,
  addmovie,
  updatemovie,
} = require("../controller/movie.controller");

const router = Router();

router.get("/", home);
router.get("/add_movie", add_movie);
router.get("/edit_movie", edit_movie);
router.get("/deletemovie", deletemovie);


router.post("/addmovie", uploadImage, addmovie);
router.post("/edit_movie",uploadImage, updatemovie);

module.exports = router