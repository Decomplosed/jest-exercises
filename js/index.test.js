import puppeteer from 'puppeteer'

test('Validating first name field', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
})
