const express = require("express");

const {
  ItemController,
  UserController,
  ArtistController,
  BandController,
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

router.put("/band/:id", BandController.edit);
router.get("/band/:id", BandController.read);
router.get("/band", BandController.browse);
router.post("/band", BandController.add);
router.delete("/band/:id", BandController.delete);

module.exports = router;
