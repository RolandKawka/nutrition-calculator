const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        hello: {
            type: GraphQLString,
            args: {},
            resolve() {
                return 'Hello World';
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery,
});
