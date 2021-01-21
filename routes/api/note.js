const router = require("express").Router();
const noteController = require("../../controllers/noteController");

// Matches with "/api/posts"
router
  .route("/")
  .get(noteController.findAll)
  .post(noteController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(noteController.findById)
  .put(noteController.update)
  .delete(noteController.remove);
  

module.exports = router;
