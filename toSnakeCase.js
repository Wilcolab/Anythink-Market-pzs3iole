// Converts a string to snake_case
function toSnakeCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, '$1_$2') // handle camelCase
    .replace(/\s+/g, '_')               // replace spaces with _
    .replace(/-+/g, '_')                 // replace dashes with _
    .replace(/__+/g, '_')                // collapse multiple _
    .toLowerCase();
}

// Example usage:
// console.log(toSnakeCase('Hello World!')) // 'hello_world!'
// console.log(toSnakeCase('fooBarBaz'))    // 'foo_bar_baz'

module.exports = toSnakeCase;
