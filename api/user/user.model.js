import mongoose from 'mongoose';
const { Schema } = mongoose;

const Story = new Schema({
  username: {
    type: 'String',
  },
  password: {
    type: 'String',
  },
  fullname: {
    type: 'String',
  },
  imgUrl: {
    type: 'String',
  },
  bio: {
    type: 'String',
  },
  following: [
    {
      fullname: {
        type: 'String',
      },
      imgUrl: {
        type: 'String',
      },
    },
  ],
  followers: [
    {
      fullname: {
        type: 'String',
      },
      imgUrl: {
        type: 'String',
      },
    },
  ],
});
