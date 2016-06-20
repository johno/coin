const choo = require('choo')

const mainView = require('./views/main')

const app = choo()

app.model({
  namespace: 'ethereum',
  state: {
    data: {}
  }
})

app.router(route => [
  route('/', mainView)
])

if (module.parent) {
  module.exports = app
} else {
  app.start('#app-root')
}
