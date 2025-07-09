// Converts a string to kebab-case format
function toKebabCase(input) {
  if (typeof input !== 'string' || !input.trim()) {
    throw new TypeError('Input must be a non-empty string');
  }
  // Replace camelCase with space before uppercase
  let words = input
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_\s]+/g, ' ')
    .trim()
    .split(' ');
  return words
    .map(word => word.toLowerCase())
    .join('-');
}

// Example usage:
// toKebabCase('firstName')      // 'first-name'
// toKebabCase('user_id')        // 'user-id'
// toKebabCase('SCREEN NAME')    // 'screen-name'
// toKebabCase('mobile-number')  // 'mobile-number'

module.exports = toKebabCase;
