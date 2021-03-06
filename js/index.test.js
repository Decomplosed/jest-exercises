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

test('Validating all fields', async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 35,
  })
  const page = await browser.newPage()
  await page.goto(app)

  await page.click('input#firstName')
  await page.type('input#firstName', 'John')
  await page.click('input#lastName')
  await page.type('input#lastName', 'Doe')
  await page.click('input#password')
  await page.type('input#password', '123456a')
  await page.click('input#confirmPassword')
  await page.type('input#confirmPassword', '123456a')
  await page.click('input#email')
  await page.type('input#email', 'johndoe@email.com')
  await page.click('input#firstName')

  try {
    const invalidInput = await page.$eval('input.invalid', (input) => input)
    expect(input).toBeUndefined()
  } catch (err) {
    expect(err).toBeDefined()
  }

  await browser.close()
}, 10000)

test('Validating lastName and firstName with invalid data', async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 35,
  })
  const page = await browser.newPage()
  await page.goto(app)

  await page.click('input#firstName')
  await page.type('input#firstName', ' ')
  await page.click('input#lastName')
  await page.type('input#lastName', 'Doe3')
  await page.click('input#password')
  await page.type('input#password', '123456a')
  await page.click('input#confirmPassword')
  await page.type('input#confirmPassword', '123456a')
  await page.click('input#email')
  await page.type('input#email', 'johndoe@email.com')
  await page.click('input#firstName')

  const invalidInput = await page.$eval('input.invalid', (input) => input)
  expect(invalidInput).toBeDefined()

  await browser.close()
}, 10000)

test('Validating the password and confirmPassowrd - valid', async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 35,
  })
  const page = await browser.newPage()
  page.goto(app)

  await page.click('input#password')
  await page.type('input#password', '123456a')
  await page.click('input#confirmPassword')
  await page.type('input#confirmPassword', '123456a')

  const invalidInput = await page.$eval('input.invalid', (input) => input)
  expect(input).toBeUndefined()

  await browser.close()
}, 10000)

test('Validating the password and confirmPassowrd - invalid', async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 35,
    args: ['--window-size=1280,800'],
  })
  const page = await browser.newPage()
  page.goto(app)

  await page.click('input#password')
  await page.type('input#password', '123456a')
  await page.click('input#confirmPassword')
  await page.type('input#confirmPassword', '1234567a')

  try {
    const invalidInput = await page.$eval('input.invalid', (input) => input)
    expect(input).toBeDefined()
  } catch (err) {
    expect(err).toBeUndefined()
  }

  await browser.close()
}, 10000)

test('Fetching success panel', async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 35,
    args: ['--window-size=1280,800'],
  })
  const page = await browser.newPage()
  await page.goto(app)

  await page.click('input#firstName')
  await page.type('input#firstName', 'John')
  await page.click('input#lastName')
  await page.type('input#lastName', 'Doe')
  await page.click('input#password')
  await page.type('input#password', '123456a')
  await page.click('input#confirmPassword')
  await page.type('input#confirmPassword', '123456a')
  await page.click('input#email')
  await page.type('input#email', 'johndoe@email.com')
  await page.click('input#firstName')
  await page.click('button#formBtn')

  let successPanel = await page.waitForSelector('div.card-panel')
  expect(successPanel).toBeDefined()

  await browser.close()
}, 10000)
