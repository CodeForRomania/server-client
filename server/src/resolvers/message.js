import formatErrors from '../formatErrors'
import requiresAuth from '../permissions'

export default {
  Query: {
    getMessages: requiresAuth.createResolver(async (parent, { userId }, { models }) =>
      models.sequelize.query('select * from messages as m where m.user_id = ?', {
        replacements: [userId],
        model: models.Message,
        raw: true
      })
    )
  },
  Mutation: {},
  Message: {}
}
