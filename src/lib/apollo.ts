import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4zvgu0jqi01xiax9m0cfm/master',
  cache: new InMemoryCache()
})