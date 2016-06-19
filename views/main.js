const assert = require('assert')
const choo = require('choo')

module.exports = function (params, state, send) {
  const ethereum = state.ethereum.data

  assert.equal(typeof ethereum, 'object', 'ethereum should be a string')

  return choo.view`
    <section id="app-root">
      <link rel="stylesheet" href="https://npmcdn.com/tachyons@4.0.0-beta.31/css/tachyons.min.css">
      <h1>
        Ethereum
        <small>${ethereum.symbol}</small>
      </h1>
      <h2>
        \$${ethereum.price_usd.toFixed(2)}
      </h2>
    </section>
  `
}
