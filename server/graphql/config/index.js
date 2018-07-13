const {pool} = require('../../db');
const {PubSub, withFilter} = require('graphql-subscriptions');
const pubsub = new PubSub();
const configS_CHANGED_TOPIC = 'configs_changed';

const configResolve = {
  Query: {
    getConfig: async (obj, args, context) => {
      return [];
    },
  },
  Mutation: {
    addConfig: async (root, {name}, context) => {
      pubsub.publish(configS_CHANGED_TOPIC, {configAdded: {name}, type: 'sub_test'});
      return {name};
    },
  },
};

// language=GraphQL Schema
const configTypeDef = `
  type config{
    name: String,
  }
  type Query{
    getConfig(name: String!): config
  }
  type Mutation{
    addConfig(name: String!): config
  }
`;


module.exports = {
  configResolve,
  configTypeDef,
};
