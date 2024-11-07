const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {ApolloServer} = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const fs = require('fs');
const path = require('path');
const todoResolvers = require('./Resolver/todoResolvers');


async function startServer() {
    const app = express();
    const typeDefs = fs.readFileSync(path.join(__dirname, './schema.graphql'), 'utf-8');
    const server = new ApolloServer({
        typeDefs,
        resolvers: todoResolvers,
    });
    app.use(cors());
    app.use(bodyParser.json());
    await server.start();
    app.use('/graphql', expressMiddleware(server));
    app.listen(8000, () => console.log('Server is running on port 8000'));
}

startServer();