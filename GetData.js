const axios = require('axios');
require('dotenv').config();

async function  get_CoinMarket(url_final){
    let response_two = null;
    response_two = await axios.get(`https://pro-api.coinmarketcap.com/v1/${url_final}`, {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.api_key ,
      },
    });
    return response_two.data
}





module.exports = get_CoinMarket

