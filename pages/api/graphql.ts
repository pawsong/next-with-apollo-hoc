import { ApolloServer } from 'apollo-server-micro'
import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    echo(message: String!): String!
  }
`

const resolvers = {
  Query: {
    echo(_root, { message }) {
      console.log(`[graphql] echo message: "${message}"`)
      return message
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
