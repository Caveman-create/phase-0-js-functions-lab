// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

// Function 1: calculateTax
function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome
function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discount;
}

// DO NOT REMOVE EXPORTS (if they exist in your file)
// module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };