import gm from '../gm.js'

(async () => {
  const response = await gm.getExchangeRate({
    from: 'USD',
    to: 'BTC',
  })

  console.log(response)
})()
