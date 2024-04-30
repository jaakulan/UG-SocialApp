export function usernameValidator(username) {
    if (!username) return "Username can't be empty."
    if (username.length < 8 || username.length > 20) return 'Username must be 8-20 characters long.'
    // TODO if username already exists return 'Username already taken.'
    return ''
}
