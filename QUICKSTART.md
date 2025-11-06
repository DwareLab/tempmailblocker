# Quick Start Guide

Get started with `tempmail-blocker` in 5 minutes!

## Installation

```bash
npm install tempmail-blocker
```

## Basic Usage

### 1. Check if an email is temporary

```javascript
const { isTempMail } = require('tempmail-blocker');

// Check email
if (isTempMail('user@tempmail.com')) {
  console.log('This is a temporary email!');
}
```

### 2. Validate in a form

```javascript
const { isTempMail } = require('tempmail-blocker');

function handleSubmit(email) {
  if (isTempMail(email)) {
    alert('Please use a permanent email address');
    return false;
  }
  return true;
}
```

### 3. Express.js middleware

```javascript
const { isTempMail } = require('tempmail-blocker');

app.post('/register', (req, res) => {
  if (isTempMail(req.body.email)) {
    return res.status(400).json({
      error: 'Temporary emails not allowed'
    });
  }
  // Continue registration...
});
```

## TypeScript

```typescript
import { isTempMail } from 'tempmail-blocker';

const isTemp: boolean = isTempMail('user@example.com');
```

## All Available Functions

```javascript
const {
  isTempMail,              // Check email address
  isTempMailDomain,        // Check domain only
  validateEmail,           // Validate or throw error
  isBlocked,              // Alias for isTempMailDomain
  getBlockedDomainsCount, // Get total count
  getBlockedDomains       // Get all domains
} = require('tempmail-blocker');
```

## Common Patterns

### Pattern 1: User Registration
```javascript
if (isTempMail(email)) {
  throw new Error('Invalid email');
}
```

### Pattern 2: Form Validation
```javascript
const errors = {};
if (isTempMail(email)) {
  errors.email = 'Use permanent email';
}
```

### Pattern 3: API Validation
```javascript
try {
  validateEmail(req.body.email);
} catch (error) {
  return res.status(400).json({ error: error.message });
}
```

## What Gets Blocked?

Over 4,492 temporary email domains including:
- tempmail.com
- 10minutemail.net
- guerrillamail.com
- mailinator.com
- yopmail.com
- And many more...

## Need Help?

- Read the full [README.md](README.md)
- Check [example.js](example.js) for more examples
- See [example.ts](example.ts) for TypeScript examples

## Next Steps

1. Install the package
2. Import the function you need
3. Add validation to your forms
4. Test with temporary emails
5. Deploy to production!

That's it! You're ready to block temporary emails. 🎉

