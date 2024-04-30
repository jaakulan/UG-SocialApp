export function passwordValidator(password) {
  if (!password) return "Password can't be empty."
  if (password.length < 5) return 'Password must be at least 5 characters long.' // TODO maybe make regex to check one char, one number, etc...
  return ''
}
