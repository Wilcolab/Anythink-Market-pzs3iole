// Converts a string to camelCase
function toCamelCase(text) {
  return text
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
    .replace(/^(.)/, (match, chr) => chr.toLowerCase());
}

// Example usage:
// console.log(toCamelCase('first name'));      // 'firstName'
// console.log(toCamelCase('user_id'));        // 'userId'
// console.log(toCamelCase('SCREEN_NAME'));    // 'screenName'
// console.log(toCamelCase('mobile-number'));  // 'mobileNumber'

module.exports = toCamelCase;
