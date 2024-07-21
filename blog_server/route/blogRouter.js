const express = require('express');
const router = express.Router();


const blogController = require('../controller/blogController');


router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogById);
router.post('/', blogController.createBlog)

module.exports = router;

