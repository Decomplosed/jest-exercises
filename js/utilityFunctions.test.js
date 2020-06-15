import { isEmpty, checkIfEmpty, setValidationRes } from './utilityFunctions'

let result

test('isEmpty()', () => {
  result = isEmpty('')
  expect(result).toBeTruthy()

  result = isEmpty(' ')
  expect(result).toBeFalsy()
})
