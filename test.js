const tempmailBlocker = require('./dist/index.js');

console.log('Testing tempmail-blocker package...\n');

// Test 1: Check temporary email
console.log('Test 1: isTempMail()');
console.log('  tempmail.com:', tempmailBlocker.isTempMail('user@tempmail.com'));
console.log('  gmail.com:', tempmailBlocker.isTempMail('user@gmail.com'));
console.log('  10minutemail.com:', tempmailBlocker.isTempMail('test@10minutemail.com'));
console.log('');

// Test 2: Check domain only
console.log('Test 2: isTempMailDomain()');
console.log('  guerrillamail.com:', tempmailBlocker.isTempMailDomain('guerrillamail.com'));
console.log('  outlook.com:', tempmailBlocker.isTempMailDomain('outlook.com'));
console.log('');

// Test 3: Validate email
console.log('Test 3: validateEmail()');
try {
  tempmailBlocker.validateEmail('user@gmail.com');
  console.log('  gmail.com: Valid ✓');
} catch (error) {
  console.log('  gmail.com: Invalid ✗');
}

try {
  tempmailBlocker.validateEmail('user@mailinator.com');
  console.log('  mailinator.com: Valid ✓');
} catch (error) {
  console.log('  mailinator.com: Invalid ✗ -', error.message);
}
console.log('');

// Test 4: Get statistics
console.log('Test 4: Statistics');
console.log('  Total blocked domains:', tempmailBlocker.getBlockedDomainsCount());
console.log('  First 10 blocked domains:', tempmailBlocker.getBlockedDomains().slice(0, 10).join(', '));
console.log('');

console.log('All tests completed! ✓');

