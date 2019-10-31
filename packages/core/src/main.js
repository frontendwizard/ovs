const pptr = require("puppeteer")
const login = require("./login")

;(async () => {
  const browser = await pptr.launch({ headless: false })
  const page = await browser.newPage()

  await login({
    page,
    username: "juliano.farias",
    password: "eaf7oR)F6MaTqy@WMTNd",
  })
})()
