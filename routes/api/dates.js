const router = require("express").Router();
const datesController = require("../../controllers/datesController");

// Matches with "/api/leads"
router.route("/").get(datesController.findAll).post(datesController.create);

// Matches with "/api dates/:id"
router
  .route("/:id")
  .get(datesController.findById)
  .put(datesController.update)
  .delete(datesController.remove);

module.exports = router;
