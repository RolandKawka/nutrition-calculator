const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

const sequelize = new Sequelize(process.env.POSTGRES_URI);

app.use(cors());
app.use(morgan('combined'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(3000, () => console.log('app is running on port 3000'));
