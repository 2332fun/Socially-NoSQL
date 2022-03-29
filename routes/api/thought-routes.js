const router = require('express').Router();
const {
  getThoughtById,
  getAllThoughts,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought)
  .get(getAllThoughts);


// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;