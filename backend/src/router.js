const express = require("express");

const {
  ItemController,
  UserController,
  ArtistController,
  AuthController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/user", UserController.browse);
router.get("/user/:id", UserController.read);
router.put("/user/:id", UserController.edit);
router.post("/user", UserController.add);
router.delete("/user/:id", UserController.delete);

router.get("/artist", ArtistController.browse);
router.get("/artist/:id", ArtistController.read);
router.put("/artist/:id", ArtistController.edit);
router.post("/artist", ArtistController.add);
router.delete("/artist/:id", ArtistController.delete);

router.post("/auth/signup", AuthController.signup);

module.exports = router;
