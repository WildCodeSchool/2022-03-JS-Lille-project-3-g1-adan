const express = require("express");

const {
  UserController,
  MusicStyleController,
  ArtistController,
  AuthController,
  SearchableController,
  EmployerController,
} = require("./controllers");

const router = express.Router();

router.get("/musicStyles", MusicStyleController.browse);

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

router.get("/searchs", SearchableController.browse);

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

router.post("/employer", EmployerController.add);
router.get("/employer/:id", EmployerController.read);
router.put("/employer/:id", EmployerController.editAllInfo);
router.delete("/employer/:id", EmployerController.delete);

module.exports = router;
