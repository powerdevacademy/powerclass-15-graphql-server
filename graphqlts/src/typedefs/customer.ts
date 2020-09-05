import { gql } from 'apollo-server-express';

export default gql`
    type Customer {
        customerNumber: ID!
        customerName: String!
        contactLastName: String!
        contactFirstName: String!
        phone: String!
        addressLine1: String!
        addressLine2: String
        city: String!
        state: String
        postalCode: String
        country: String!
        salesRepEmployeeNumber: Int
        creditLimit: Float
        #orders: [Order]
        #salesRepEmployee: Employee
        #payments: [Payment]
    }

    type Query {
        customers: [Customer]
        customer(id : ID!): Customer
    }

    type Mutation {
        deleteCustomer(id: ID!): Customer!
    }
`;