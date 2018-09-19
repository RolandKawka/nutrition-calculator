const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const knex = require('knex');
const schema = require('./schema/schema');

const app = express();

const db = knex({
    client: 'pg',
    connection: process.env.POSTGRES_URI,
});

app.use(cors());
app.use(morgan('combined'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

db('hello')
    .then(res => console.log(res));

app.listen(3000, () => console.log('app is running on port 3000'));
