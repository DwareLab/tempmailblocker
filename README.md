# Tempmail Blocker

https://www.npmjs.com/package/tempmail-blocker

A lightweight npm package to block temporary/disposable email domains and prevent spam registrations.

## Features

- **4,492+ blocked domains** - Comprehensive list of temporary email services
- **Zero dependencies** - Lightweight and fast
- **TypeScript support** - Full type definitions included
- **Easy to use** - Simple API with multiple validation methods
- **Regularly updated** - Domain list is actively maintained

## Installation

```bash
npm install tempmail-blocker
```

## Usage

### Basic Usage

```javascript
const { isTempMail } = require('tempmail-blocker');

// Check if an email uses a temporary domain
if (isTempMail('user@tempmail.com')) {
  console.log('Temporary email detected!');
}
```

### TypeScript

```typescript
import { isTempMail, validateEmail } from 'tempmail-blocker';

// Check email
const isTemp = isTempMail('user@10minutemail.com');

// Validate and throw error if temporary
try {
  validateEmail('user@guerrillamail.com');
} catch (error) {
  console.error(error.message); // "Temporary or disposable email addresses are not allowed"
}
```

### Express.js Middleware Example

```javascript
const { isTempMail } = require('tempmail-blocker');

app.post('/register', (req, res) => {
  const { email } = req.body;
  
  if (isTempMail(email)) {
    return res.status(400).json({
      error: 'Temporary email addresses are not allowed'
    });
  }
  
  // Continue with registration...
});
```

### React Form Validation

```javascript
import { isTempMail } from 'tempmail-blocker';

function RegistrationForm() {
  const handleSubmit = (email) => {
    if (isTempMail(email)) {
      alert('Please use a permanent email address');
      return;
    }
    // Continue with form submission...
  };
}
```

## API Reference

### `isTempMail(email: string): boolean`

Check if an email address uses a temporary/disposable email domain.

**Parameters:**
- `email` (string): The email address to check

**Returns:**
- `boolean`: `true` if the email uses a blocked domain, `false` otherwise

**Example:**
```javascript
isTempMail('user@tempmail.com'); // true
isTempMail('user@gmail.com');    // false
```

---

### `isTempMailDomain(domain: string): boolean`

Check if a domain is a temporary/disposable email domain.

**Parameters:**
- `domain` (string): The domain to check

**Returns:**
- `boolean`: `true` if the domain is blocked, `false` otherwise

**Example:**
```javascript
isTempMailDomain('tempmail.com');  // true
isTempMailDomain('gmail.com');     // false
```

---

### `validateEmail(email: string): void`

Validate an email address and throw an error if it uses a temporary domain.

**Parameters:**
- `email` (string): The email address to validate

**Throws:**
- `Error`: If the email uses a blocked domain

**Example:**
```javascript
try {
  validateEmail('user@tempmail.com');
} catch (error) {
  console.error(error.message);
}
```

---

### `isBlocked(domain: string): boolean`

Alias for `isTempMailDomain()`. Check if a domain is blocked.

**Parameters:**
- `domain` (string): The domain to check

**Returns:**
- `boolean`: `true` if the domain is blocked, `false` otherwise

---

### `getBlockedDomainsCount(): number`

Get the total number of blocked domains.

**Returns:**
- `number`: The count of blocked domains

**Example:**
```javascript
const count = getBlockedDomainsCount();
console.log(`Blocking ${count} domains`); // "Blocking 4492 domains"
```

---

### `getBlockedDomains(): string[]`

Get all blocked domains as an array.

**Returns:**
- `string[]`: Array of all blocked domains

**Example:**
```javascript
const domains = getBlockedDomains();
console.log(domains); // ['tempmail.com', '10minutemail.com', ...]
```

## Use Cases

- **User Registration**: Prevent users from signing up with temporary emails
- **Newsletter Subscriptions**: Ensure subscribers use permanent email addresses
- **Contact Forms**: Block spam from temporary email services
- **E-commerce**: Validate customer emails during checkout
- **API Rate Limiting**: Prevent abuse through disposable emails

## Blocked Domains

This package blocks over 4,492 temporary email domains including:

- 10minutemail.com
- guerrillamail.com
- tempmail.com
- mailinator.com
- And many more...

## Performance

- **Fast lookups**: Uses a Set for O(1) domain checking
- **Lazy loading**: Domains are loaded only when first needed
- **Memory efficient**: Domains are cached in memory after first load

## Contributing

Contributions are welcome! If you find a temporary email domain that should be blocked:

1. Fork the repository
2. Add the domain to `domains.txt`
3. Submit a pull request

## License

MIT

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

