const mongoose = require('mongoose');
const { Schema } = mongoose;

const Story = new Schema({
  createdAt: {
    type: 'Number',
  },
  txt: {
    type: 'String',
  },
  imgUrl: {
    type: 'String',
  },
  by: {
    _id: {
      type: 'String',
    },
    fullname: {
      type: 'String',
    },
    imgUrl: {
      type: 'String',
    },
  },
  loc: {
    lat: {
      type: 'Number',
    },
    lng: {
      type: 'Number',
    },
    name: {
      type: 'String',
    },
  },
  comments: {
    type: ['Mixed'],
  },
  likedBy: {
    type: ['Mixed'],
  },
  tags: {
    type: ['String'],
  },
});

module.exports = mongoose.model('story', Story, 'story');
