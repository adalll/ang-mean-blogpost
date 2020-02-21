const express = require('express');
const router = express.Router();

const PostController = require('../controllers/posts');
const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file-multer');

router.post(
  '',
  checkAuth,
  extractFile,
  PostController.createPost
);

router.get(
  '',
  PostController.getPosts
);

router.get(
  "/:id",
  PostController.getPost
);

router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostController.updatePost
);

router.delete(
  '/:id',
  checkAuth,
  PostController.deletePost
);

module.exports = router;
