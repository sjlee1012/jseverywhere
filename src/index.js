const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const port = process.env.PORT||4000;

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!'
    }
}

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
    server.applyMiddleware({ app , path: '/api'});
    app.listen({ port }, () => {
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
});


// server.applyMiddleware({ app, path: '/api' });
// app.listen({ port }, () => {
//     console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
// });


