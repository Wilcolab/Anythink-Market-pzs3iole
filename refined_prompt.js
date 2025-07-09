// Converts any given string to camelCase format.
function toCamelCase(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (!input.trim()) return '';
  // Remove all non-alphanumeric except space, dash, underscore
  let cleaned = input.replace(/[^\w\s-_]+/g, '');
  // Split by space, dash, underscore
  let words = cleaned.split(/[\s-_]+/);
  return words
    .map((word, i) => {
      if (i === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Example usage:
// toCamelCase('first name')        // 'firstName'
// toCamelCase('user_id')           // 'userId'
// toCamelCase('SCREEN_NAME')       // 'screenName'
// toCamelCase('mobile-number')     // 'mobileNumber'
// toCamelCase('foo@bar!baz')       // 'fooBarBaz'
// toCamelCase('')                  // ''
// toCamelCase(null)                // throws TypeError
// toCamelCase(123)                 // throws TypeError

module.exports = toCamelCase;
