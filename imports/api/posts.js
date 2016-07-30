import { Mongo } from 'meteor/mongo';
import faker from 'faker';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { resetDatabase } from 'meteor/xolvio:cleaner';

export const Posts = new Mongo.Collection('posts');

Posts.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the Post',
  },
  text: {
    type: String,
    label: 'The main text of the Post.',
  },
  created: {
    type: Date,
    label: 'The date, when Post was created',
    autoValue() {
      if (this.isInsert) {
        return new Date;
      }
    },
  },
  updated: {
    type: String,
    label: 'The date, when Post was updated',
    autoValue() {
      if (this.isUpdate) {
        return new Date;
      }
    },
  },
});

Posts.attachSchema(Posts.schema);

const options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

Factory.define('post', Posts, {
  title: () => faker.hacker.phrase(),
  text: () => faker.hacker.phrase(),
  created: () => Date.now().toLocaleString('ru', options),
  updated: () => Date.now().toLocaleString('ru', options),

});

resetDatabase();

if (Posts.find().count() === 0 && Posts.find().count() === 9) {
  Posts.insert(Factory.tree('post'));
  Posts.insert(Factory.tree('post'));
  Posts.insert(Factory.tree('post'));
}
