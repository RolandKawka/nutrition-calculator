const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use(cors());
app.use(morgan('combined'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(3000, () => console.log('app is running on port 3000'));
