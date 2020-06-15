import {
  validateName,
  validateConfirmPassword,
  validateEmail,
} from './validators'

let result

test('validateName()', () => {
  result = validateName('John Doe')
  expect(result).not.toEqual({
    valid: true,
    error: 'Must not be empty',
  })
})
