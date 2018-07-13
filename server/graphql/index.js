const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const merge = require('lodash/merge');
const cors = require('cors');

// Subs
const {execute, subscribe} = require('graphql');
const {SubscriptionServer} = require('subscriptions-transport-ws');

const SUBSCRIPTIONS_PATH = '/subscriptions';

const {configTypeDef, configResolve} = require("./config");

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs: [].concat(configTypeDef),
  resolvers: merge(configResolve)
});


module.exports = {
  q: (app) => {
// The GraphQL endpoint
    app.use('/graphql', bodyParser.json(), cors(), graphqlExpress({schema}));

// GraphiQL, a visual editor for queries
    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
      subscriptionsEndpoint: `ws://localhost:3000/subscriptions`
    }));
  },
  s: (server) => {
    // Subs
    SubscriptionServer.create(
      {
        schema,
        execute,
        subscribe,
      },
      {
        server,
        path: SUBSCRIPTIONS_PATH,
      }
    );
  }
};
