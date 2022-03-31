const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  //friendslist
  newFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
  
  //friendslist //api/users/:id/friends/:friendsId
router
  .route('/:id/friends/:friendId')
  .post(newFriend)
  .delete(deleteFriend);

module.exports = router;