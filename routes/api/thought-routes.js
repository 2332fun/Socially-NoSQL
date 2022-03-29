const router = require('express').Router();
const {
  getThoughtById,
  getAllThoughts,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);


// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(updateThought)
  .get(getThoughtById)
  .post(addReaction)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;