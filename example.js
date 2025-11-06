// Example usage of tempmail-blocker package

const { 
  isTempMail, 
  isTempMailDomain, 
  validateEmail,
  getBlockedDomainsCount 
} = require('./dist/index.js');

console.log('=== Tempmail Blocker Examples ===\n');

// Example 1: Basic email validation
console.log('1. Basic Email Validation:');
const emails = [
  'user@gmail.com',
  'test@tempmail.com',
  'admin@guerrillamail.com',
  'contact@outlook.com'
];

emails.forEach(email => {
  const isTemp = isTempMail(email);
  console.log(`  ${email}: ${isTemp ? '❌ BLOCKED' : '✓ ALLOWED'}`);
});

console.log('\n2. Domain-only Check:');
const domains = ['mailinator.com', 'yahoo.com', 'yopmail.com'];
domains.forEach(domain => {
  const isBlocked = isTempMailDomain(domain);
  console.log(`  ${domain}: ${isBlocked ? '❌ BLOCKED' : '✓ ALLOWED'}`);
});

console.log('\n3. Validation with Error Handling:');
try {
  validateEmail('user@10minutemail.net');
  console.log('  Email accepted');
} catch (error) {
  console.log(`  ❌ ${error.message}`);
}

console.log('\n4. Statistics:');
console.log(`  Total blocked domains: ${getBlockedDomainsCount()}`);

console.log('\n=== Express.js Middleware Example ===\n');
console.log(`
// In your Express.js app:
const { isTempMail } = require('tempmail-blocker');

app.post('/register', (req, res) => {
  const { email } = req.body;
  
  if (isTempMail(email)) {
    return res.status(400).json({
      error: 'Temporary email addresses are not allowed'
    });
  }
  
  // Continue with registration...
  res.json({ success: true });
});
`);

