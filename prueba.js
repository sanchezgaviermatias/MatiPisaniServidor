const get_CoinMarket = require("./GetData.js")


const prueba = async () =>{
    const data =  await get_CoinMarket("cryptocurrency/categories")
    console.log(data)
}

prueba()



