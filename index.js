// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const axios = require('axios');
const get_CoinMarket = require("./GetData.js")


fastify.register(require('fastify-cors'), { 
    // put your options here
  })

fastify.get('/crypto', async (request, reply) => {
    const data =  await get_CoinMarket("cryptocurrency/listings/latest")
    reply.send(data)
  })


// Run the server!
const start = async () => {
  try {
    await fastify.listen(3300)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()