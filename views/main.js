const assert = require('assert')
const choo = require('choo')
const Humanize = require('humanize-plus')

module.exports = function (params, state, send) {
  const ethereum = state.ethereum.data

  assert.equal(typeof ethereum, 'object', 'ethereum should be a string')

  const vol = Humanize.compactInteger(ethereum['24h_volume_usd'])
  const cap = Humanize.compactInteger(ethereum['market_cap_usd'])

  return choo.view`
    <section id="app-root">
      <link rel="stylesheet" href="https://npmcdn.com/tachyons@4.0.0-beta.31/css/tachyons.min.css">
      <div class="cf pa4 mb b--light-gray">
        <div class="fl w-50">
          <h1 class="mt0 mb0">
            Ethereum
            <small>${ethereum.symbol}</small>
          </h1>
          <h2 class="mt0 normal">
            \$${ethereum.price_usd.toFixed(2)}
          </h2>

          <div class="ba b--light-gray br2 cf center">
            <div class="fl w-50 br b--light-gray">
              <div class="pa3">
                <h4 class="mt0 mb0">\$${vol}</h4>
                <span class="f6 light-silver tracked ttu mt0">
                  24hr volume
                </span>
              </div>
            </div>
            <div class="fl w-50">
              <div class="pa3">
                <h4 class="mt0 mb0">\$${cap}</h4>
                <span class="f6 light-silver tracked ttu mt0">
                  Market Cap
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
