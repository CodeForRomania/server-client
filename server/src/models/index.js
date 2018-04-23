import Sequelize from 'sequelize'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default async () => {
  let maxReconnects = 20
  let connected = false
  const sequelize = new Sequelize(process.env.DB_NAME, null, null, {
    dialect: 'sqlite',
    operatorsAliases: Sequelize.Op,
    host: process.env.DB_HOST || 'localhost',
    storage: `./database/${process.env.DB_NAME}.db`
  })

  while (!connected && maxReconnects) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await sequelize.authenticate()
      connected = true
    } catch (err) {
      console.log('sqlite: reconnecting in 5 seconds')
      // eslint-disable-next-line no-await-in-loop
      await sleep(5000)
      maxReconnects -= 1
    }
  }

  if (!connected) {
    return null
  }

  const models = {
    User: sequelize.import('./user'),
    Message: sequelize.import('./message')
  }

  Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models)
    }
  })

  models.sequelize = sequelize
  models.Sequelize = Sequelize
  models.op = Sequelize.Op

  return models
}
