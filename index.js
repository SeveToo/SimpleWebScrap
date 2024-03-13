import puppeteer from 'puppeteer'
import Express from 'express'

const app = Express()

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('https://quotes.toscrape.com/')
  res.send(await page.title())
  await browser.close()
})

app.listen(3000)
