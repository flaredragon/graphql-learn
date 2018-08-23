const graphql = require('graphql');
const lodash = require('lodash');
const {GraphQLObjectType,
        GraphQLString,
        GraphQLInt} = graphql;

const User = [ 
    { id:"45",firstName:"SAHAH",age:4},
    { id:"33",firstName:"BOO",age:33}]

const UserType = new GraphQLObjectType({
name:'User',
fields:{
    id:{type:GraphQLString},
    firstName:{type:GraphQLString},
    age:{type:GraphQLInt}
}})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:UserType,
        args:{ id:{ type:GraphQLString } },
        resolve(parentValue,args) {
            return _.find(User,{id:args.id});
        }
    }
})