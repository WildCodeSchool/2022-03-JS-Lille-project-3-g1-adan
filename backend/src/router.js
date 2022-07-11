const express = require("express");
const passport = require("passport");

const {
  UserController,
  MusicStyleController,
  ArtistController,
  BandController,
  AuthController,
  SearchableController,
  EmployerController,
  CalendarController,
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
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);

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

router.put("/band/:id", BandController.edit);
router.get("/band/:id", BandController.read);
router.get("/band", BandController.browse);
router.post("/band", BandController.add);
router.delete("/band/:id", BandController.delete);

router.post("/employer", EmployerController.add);

router.put("/calendar/:id", CalendarController.edit);
router.get("/calendar/:id", CalendarController.read);
router.get("/calendar", CalendarController.browse);
router.post("/calendar/:id", CalendarController.add);
router.delete("/calendar/:id", CalendarController.delete);
module.exports = router;
