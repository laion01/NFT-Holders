const db = require("../models");
const Management = db.Management;
const Pair = db.Pair;
const Token = db.Token;
const Trade = db.Trade;
const TxList = db.TxList;
const Op = db.Sequelize.Op;

async function addTx(tx) {

  await TxList.create(tx)
  .then(data => {

  }).catch(err => {
    console.log(err)
  })
  res = await getTxByHash(tx.hash)
  return res;
}

async function getTxByHash(hash) {
  var res;
  await TxList.findOne({where : {hash: hash}})
  .then(data => {
    if (data) {
      res = data.dataValues;
    } else {
      res = false;
    }
  })
  .catch(err => {
    res = false;
  });
  return res;
}

async function getAllTx() {
  var res;
  await TxList.findAll()
  .then (data => {
    res = data
  })
  .catch(err => {
    res = [];
  })
  return res;
}

async function updateTx(hash, data) {
  await TxList.update(data, { where : { hash: hash } })
  .then (data => {
      res = data.dataValues
  }).catch (err => {
      res = null
  });
  return res;
}

async function addToken(name, symbol, decimals, address, owner, icon, abi, isVerified) {
    // Create a Token
    var res;
    const time = new Date();
    const token = {
        name: name, symbol: symbol, decimals: decimals, address: address, owner: owner, icon: icon, abi: abi, isVerified: isVerified, createdAt: time, updatedAt: time
    };

    // Save Pair in the database
    await Token.create(token)
    .then(data => {
      res = data
    })
    .catch(err => {
      console.log(err)
      res = false
    });
    res = await getTokenByAddress(address);
    return res;
}

async function getTokenByAddress(address) {
    var res;
    await Token.findOne({where : {address: address}})
    .then(data => {
      if (data) {
        res = data.dataValues;
      } else {
        res = false;
      }
    })
    .catch(err => {
      res = false;
    });
    return res;
}

async function getTokenById(id) {
    var res;
    await Token.findByPk(id)
    .then(data => {
      if (data) {
        res = data.dataValues;
      } else {
        res = null;
      }
    })
    .catch(err => {
      res = false;
    });
    return res;
}

async function getAllTokens() {
  var res;
  await Token.findAll()
  .then (data => {
    res = data
  })
  .catch(err => {
    res = [];
  })
  return res;
}

async function getAllPairs() {
  var res;
  await Pair.findAll()
  .then (data => {
    res = data
  })
  .catch(err => {
    res = [];
  })
  return res;
}

async function getAllTrades() {
  var res;
  await Trade.findAll()
  .then (data => {
    res = data
  })
  .catch(err => {
    res = [];
  })
  return res;
}

async function addPair(pairAddress, inputToken, outputToken, price, totalLiqudity, abi) {
    // Create a 
    var res;
    const time = new Date();
    const pair = {
        address: pairAddress,
        inputToken: inputToken,
        outputToken: outputToken,
        initialPrice: price,
        price: price,
        initialLiquidity: totalLiqudity,
        totalLiqudity: totalLiqudity,
        abi: abi,
        createdAt: time,
        updatedAt: time
    };
    // Save Pair in the database
    await Pair.create(pair)
    .then(data => {
        res = data.dataValues
    })
    .catch(err => {
        res = false;
    });
    res = getPairByAddress(pairAddress)
    return res;
}

async function getPairByAddress(pairAddress) {
    var res;
    await Pair.findOne({ where: { address: pairAddress } })
    .then(data => {
      res = data.dataValues;
    })
    .catch(err => {
      res = null;
    });
    return res;
}

async function buyPair(id, amountIn, amountOut, priceUsd) {
    var res;
    await Pair.update({
        amountIn: amountIn,
        amountOut: amountOut,
        priceUsd: priceUsd,
        isWorking: true,
        buyTime: new Date()
    }, { where : { id: id } })
    .then (data => {
        res = data.dataValues
    }).catch (err => {
        res = null
    });
    return res;
}

async function addTrade(data) {
  var res,ans;
  const tradeData = {
    pairAddress: data.pairAddress, 
    amountIn: data.amountIn, 
    amountOut: data.amountOut,
    buyPrice: data.buyPrice, 
    sellPrice: 0, 
    buyTime: data.buyTime, 
    sellTime: data.sellTime
  }
  await Trade.create(tradeData)
    .then(data => {
        res = data.dataValues;
    })
    .catch(err => {
        res = false;
    });
    // if(res != false) {
    //   ans = await getTradeByPairAddress(res.pairAddress, res.createdAt)
    // }
    return res;
}
async function getTradeByPairAddress (pairAddress, createdAt) {
  var res;
  await Trade.findOne({ where: { address: pairAddress, createdAt: createdAt } })
  .then(data => {
    res = data.dataValues;
  })
  .catch(err => {
    res = null;
  });
  return res;
}
async function sellPair(address, sell_data) {
    var res;
    await Trade.update( sell_data, { where : { pairAddress: address  }})
    .then (data => {
        res = data.dataValues
    }).catch (err => {
        res = null
    });
    plusProfit(sell_data.profitTokenAmount);
    return res;
}

async function getPairById(id) {
    Pair.findByPk(id)
    .then(data => {
      if (data) {
        return data;
      } else {
        return null;
      }
    })
    .catch(err => {
      return false;
    });
}

async function getAllAvailablePairs() {
    Pair.findAll({ where: { isAvailable: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      return null;
    });
}

async function getAllWorkingContracts() {
    var res;
    await Pair.findAll({ where: { isWorking: true } })
    .then(data => {
        res = data
    })
    .catch(err => {
        res = false;
    });
    return res;
}

async function updatePair(address, pairData) {
  await Pair.update(pairData, { where : { address: address } })
  .then (data => {
      res = data.dataValues
  }).catch (err => {
      res = null
  });
  return res;
}

async function addSetting(mode, contractLimit, initialAmountOut) {
    // Create a 
    var res;
    const time = new Date();
    const setting = {
        mode: mode,
        contractLimit: contractLimit,
        initialAmountOut: initialAmountOut,
        startedAt: time,
        updatedAt: time
    };

    // Save Setting in the database
    await Management.create(setting)
    .then(data => {
        res = data.dataValues;
    })
    .catch(err => {
        res = false;
    });
    return res;
}

async function getInitialAmountOut()
{
    var res = 0;
    await Management.findAll({
        attributes: ['id', 'initialAmountOut', 'profit']
    }).then(data => {
        res = data[data.length -1 ].dataValues;
    })
    .catch(err => {
        res = null;
    });
    return res;
}

async function plusProfit(profit) {
    const cur = await getInitialAmountOut();
    await Management.update({
        profit: db.sequelize.literal('profit + '+profit)
    }, {where : {id:cur.id}})
    .then (data => {
        res = data
    }).catch(err => {
        res = null
    })
    return res
}

async function getCurrentProfit(profit) {
    const cur = await getInitialAmountOut()
    return cur.profit
}

module.exports = {
    addToken,
    getTokenById,
    addPair,
    getPairByAddress,
    getAllAvailablePairs,
    getAllWorkingContracts,
    getPairById,
    buyPair,
    sellPair,
    updatePair,
    addSetting,
    getInitialAmountOut,
    plusProfit,
    getCurrentProfit,
    addTrade,
    getAllTokens,
    getAllPairs,
    getAllTrades,
    addTx,
    getAllTx,
    updateTx
}