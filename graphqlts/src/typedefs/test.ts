import { gql } from "apollo-server-express";

export default gql`
    type Test {
        message: String!
        via: Media!
    }

    type Media {
        name: String!
        eta: Int!
    }

    type Query {
        talk: Test!
    }
`;
