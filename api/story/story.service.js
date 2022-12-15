const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const utilService = require('../../services/util.service');
const Story = require('./story.model');
const ObjectId = require('mongodb').ObjectId;

async function query(filterBy = { txt: '' }) {
  try {
    let criteria = {};

    if (filterBy.userId) {
      criteria = { ...criteria, 'by._id': filterBy.userId };
    }
    var stories = await Story.find(criteria);
    return stories;
  } catch (err) {
    throw err;
  }
}

async function getStoryById(storyId) {
  try {
    const storyWithId = Story.findOne({ _id: ObjectId(storyId) });

    return storyWithId;
  } catch (err) {
    throw err;
  }
}

async function remove(storyId) {
  try {
    await Story.deleteOne({ _id: ObjectId(storyId) });
    return { status: 'Success' };
  } catch (err) {
    logger.error(`cannot remove story ${storyId}`, err);
    throw err;
  }
}

async function update(story) {
  try {
    const updatedStory = await Story.updateOne(
      { _id: ObjectId(story._id) },
      { $set: story }
    );
    console.log(updatedStory);
    return story;
  } catch (err) {
    throw err;
  }
}

async function add(newStory) {
  try {
    console.log('sss', newStory);
    const createdStory = new Story(newStory);
    await createdStory.save();
    return createdStory;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  query,
  getStoryById,
  remove,
  update,
  add,
};
