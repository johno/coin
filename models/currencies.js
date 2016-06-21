const coinr = require('coinr')
const isBlank = require('is-blank')

module.exports = {
  namespace: 'currencies',
  state: {
    data: []
  },
  reducers: {
    setList: (action, state) => ({ data: action.payload })
  },
  effects: {
    list: (action, state, send) => reqAll(send)
  }
}

const reqAll = (send) => {
  coinr()
    .then(res => {
      console.log(res)
      send('currencies:setList', {
        payload: res
      })
    })
    .catch(e => {
      console.log('Encountered an error fetching currency list')
    })
}
