const express = require('express');

const {
  getStories,
  getStoryById,
  removeStory,
  updateStory,
  addStory,
} = require('./story.controller');
const router = express.Router();

router.get('/', getStories);
router.get('/:id', getStoryById);
router.delete('/:id', removeStory);
router.put('/:id', updateStory);
router.post('/', addStory);

// router.post('/', addStory);

module.exports = router;
