import puppeteer from 'puppeteer'

let browser
const app =
  'file:///Users/Bart/Desktop/Courses/classed/jest-exercises/index.html'

test('Validating first name field', async () => {
  browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(app)

  await page.click('input#firstName')
  await page.type('input#firstName', ' ')
  await page.click('input#lastName')
  let firstNameInputClass = await page.$eval(
    'input#firstName',
    (input) => input.className
  )
  expect(firstNameInputClass).toBe('invalid')

  await page.click('input#firstName')

  await page.type('input#firstName', 'John')
  await page.click('input#email')

  firstNameInputClass = await page.$eval(
    'input#firstName',
    (input) => input.className
  )
  expect(firstNameInputClass).toBe('valid')

  await browser.close()
})

test('Validating all fields', async () => {})
