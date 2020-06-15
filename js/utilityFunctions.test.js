import { isEmpty, checkIfEmpty, setValidationRes } from './utilityFunctions'

let result

test('isEmpty()', () => {
  result = isEmpty('')
  expect(result).toBeTruthy()

  result = isEmpty(' ')
  expect(result).toBeFalsy()
})

test('checkIfEmpty()', () => {
  result = checkIfEmpty(' ')

  let expectedResult = { valid: false, error: 'Must not be empty' }
  expect(result).toEqual(expectedResult)
})
