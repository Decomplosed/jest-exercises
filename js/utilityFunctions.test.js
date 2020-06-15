import { isEmpty, checkIfEmpty, setValidationRes } from './utilityFunctions'

test('isEmpty()', () => {
  let result = isEmpty('')
  expect(result).toBeTruthy()

  result = isEmpty(' ')
  expect(result).toBeFalsy()
})
