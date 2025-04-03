import { formatCurrency } from '../scripts/utils/money.js';

console.log('TEST SUITE: Format Currency')

console.log('1. converts cents into dollars');
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('2. works with 0');
if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('3. rounds up to the nearest cent');
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('4. rounds down to the nearest zero');
if (formatCurrency(2000.4) === '20.00') {
  console.log('passed');
} else {
  console.log('failed');
}
