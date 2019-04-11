const router = require("express").Router();
const buyController = require("../../controllers/buyController");

// Matches with "/api/buy"
/*router.route("/")
  .get(buyController.findAll)
  .post(buyController.create);

  // Matches with "/api/post/:id"*/
router.route("/:id")
  .get(buyController.findAll);
 // .put(postController.update)
 // .delete(postController.remove);

// router.route("/buy/:id")
 // .get(buyController.findById);

module.exports = router;