const multer = require("multer");
const movieSchema = require("../models/movie.schema");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadImage = multer({ storage }).single("image");

let movieid;

const home = async (req, res) => {
  try {
    let data = await movieSchema.find();
    return res.render("index", { movieData: data });
  } catch (error) {
    console.log(error);
  }
};

const addmovie = async (req, res) => {
  const image = req.file.path;
  try {
    let data = await movieSchema.create({ ...req.body, image });
    console.log(data);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const updatemovie = async (req, res) => {
    console.log(req.query);
    const {id} = req.query
  let data = req.body;
  if (req.file) {
    data.image = req.file.path;
  }
  try {
    let result = await movieSchema.findByIdAndUpdate(id, data);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deletemovie = async (req, res) => {
  let { id } = req.query;
  try {
    let data = await movieSchema
      .findByIdAndDelete(id)
      .then((singleRecode) => {
        fs.unlinkSync(singleRecode.image);
        return res.redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

const add_movie = async (req, res) => {
  return res.render("addMovie");
};

const edit_movie = async (req, res) => {
  let { id } = req.query;
  console.log(id);
  movieid = id;
  console.log(movieid);
  try {
    const data = await movieSchema.findById(id);
    console.log(data);
    return res.render("editMovie", { editdata: data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  add_movie,
  edit_movie,
  uploadImage,
  deletemovie,
  addmovie,
  updatemovie,
};
