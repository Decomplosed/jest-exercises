import { isEmpty, checkIfEmpty, setValidationRes } from './utilityFunctions'

test('isEmpty()', () => {
  let result = isEmpty('')
  expect(result).toBeTruthy()
})
