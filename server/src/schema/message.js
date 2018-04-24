export default `

  type Message {
    id: Int!
    message: String!
    userId: Int!
  }

  type Query {
    getMessages(userId: Int!): [Message]
  }


`
