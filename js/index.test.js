import puppeteer from 'puppeteer'

test('Validating first name field', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const app =
    'file:///Users/Bart/Desktop/Courses/classed/jest-exercises/index.html'

  await page.click('input#firstName')
  await page.type('input#firstName', ' ')
  await page.click('input#lastName')
  let firstNameInputClass = await page.$eval(
    'input#firstName',
    (input) => input.className
  )
})
