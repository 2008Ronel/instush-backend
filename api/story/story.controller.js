const storyService = require('./story.service.js');

async function getStories(req, res) {
  try {
    const filterBy = {
      userId: req.query.userId || '',
    };
    const stories = await storyService.query(filterBy);
    res.json(stories);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: 'Failed to get stories' });
  }
}

async function getStoryById(req, res) {
  try {
    const storyId = req.params.id;
    const story = await storyService.getStoryById(storyId);
    res.json(story);
  } catch (err) {
    res.status(500).send({ err: 'Failed to get story' });
  }
}

async function removeStory(req, res) {
  try {
    const storyId = req.params.id;
    const removedId = await storyService.remove(storyId);
    res.send(removedId);
  } catch (err) {
    res.status(500).send({ err: 'Failed to remove story' });
  }
}

async function addStory(req, res) {
  // const {loggedinUser} = req

  try {
    const story = req.body;
    const addedStory = await storyService.add(story);
    res.json(addedStory);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: 'Failed to add story' });
  }
}

async function updateStory(req, res) {
  try {
    const story = req.body;
    const updatedStory = await storyService.update(story);
    res.json(updatedStory);
  } catch (err) {
    res.status(500).send({ err: 'Failed to update story' });
  }
}

module.exports = {
  getStories,
  getStoryById,
  removeStory,
  updateStory,
  updateStory,
  addStory,
};
