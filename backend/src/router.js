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
  FavoriteController,
} = require("./controllers");

const router = express.Router();

router.get("/musicStyles", MusicStyleController.browse);

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
router.put("/artist/:id", ArtistController.editAllInfo);
router.post(
  "/artist",
  passport.authenticate("jwt", { session: false }),
  ArtistController.add
);
router.delete("/artist/:id", ArtistController.delete);

router.put("/band/:id", BandController.edit);
router.get("/band/:id", BandController.read);
router.get("/band", BandController.browse);
router.post("/band", BandController.add);
router.delete("/band/:id", BandController.delete);

router.post("/employer", EmployerController.add);
router.get("/employer/:id", EmployerController.read);
router.put("/employer/:id", EmployerController.editAllInfo);
router.delete("/employer/:id", EmployerController.delete);

router.post(
  "/calendar",
  passport.authenticate("jwt", { session: false }),
  CalendarController.addCalendar
);
router.put("/calendar/:id", CalendarController.edit);
router.get("/calendar/:id", CalendarController.read);
router.get("/calendar", CalendarController.browse);

router.delete("/calendar/:id", CalendarController.delete);

router.post(
  "/favorites",
  passport.authenticate("jwt", { session: false }),
  FavoriteController.add
);
router.delete(
  "/favorites/:data",
  passport.authenticate("jwt", { session: false }),
  FavoriteController.delete
);
router.get(
  "/favorites",
  passport.authenticate("jwt", { session: false }),
  FavoriteController.read
);
module.exports = router;
