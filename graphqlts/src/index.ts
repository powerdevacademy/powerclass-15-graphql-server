import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';

import typeDefs from './typedefs';
import resolvers from './resolvers';

const app = express();

export const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

createConnection();

app.get('/', (req, res) => {
    res.send("Olá");
})

app.listen(4000, () => {
    console.log("Power GraphQL server rodando!");
})
