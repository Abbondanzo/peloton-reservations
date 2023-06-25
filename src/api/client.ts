import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://cors.abbondanzo.workers.dev/https://api.onepeloton.com/",
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
