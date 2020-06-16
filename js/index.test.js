import puppeteer from 'puppeteer'

test('Validating first name field', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const app =
    'file:///Users/Bart/Desktop/Courses/classed/jest-exercises/index.html'

  await page.click('input#firstName')
})
