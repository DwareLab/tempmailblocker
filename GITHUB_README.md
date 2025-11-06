# 🛡️ Tempmail Blocker

> Block temporary/disposable email domains and prevent spam registrations

[![npm version](https://img.shields.io/npm/v/tempmail-blocker.svg)](https://www.npmjs.com/package/tempmail-blocker)
[![npm downloads](https://img.shields.io/npm/dm/tempmail-blocker.svg)](https://www.npmjs.com/package/tempmail-blocker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🚫 **4,492+ blocked domains** - Comprehensive list of temporary email services
- ⚡ **Zero dependencies** - Lightweight and blazing fast
- 📘 **TypeScript support** - Full type definitions included
- 🎯 **Easy to use** - Simple API with multiple validation methods
- 🔄 **Regularly updated** - Domain list is actively maintained

## 📦 Installation

```bash
npm install tempmail-blocker
```

## 🚀 Quick Start

```javascript
const { isTempMail } = require('tempmail-blocker');

// Check if an email uses a temporary domain
if (isTempMail('user@tempmail.com')) {
  console.log('❌ Temporary email detected!');
}
```

## 📖 Usage Examples

### Basic Validation

```javascript
const { isTempMail, isTempMailDomain } = require('tempmail-blocker');

// Check email address
isTempMail('user@tempmail.com');      // true
isTempMail('user@gmail.com');         // false

// Check domain only
isTempMailDomain('guerrillamail.com'); // true
isTempMailDomain('outlook.com');       // false
```

### Express.js Middleware

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

### TypeScript

```typescript
import { isTempMail, validateEmail } from 'tempmail-blocker';

// Type-safe validation
const isTemp: boolean = isTempMail('user@example.com');

// Throws error if temporary
try {
  validateEmail('user@tempmail.com');
} catch (error) {
  console.error(error.message);
}
```

### React Form Validation

```javascript
import { isTempMail } from 'tempmail-blocker';

function RegistrationForm() {
  const [error, setError] = useState('');
  
  const handleSubmit = (email) => {
    if (isTempMail(email)) {
      setError('Please use a permanent email address');
      return;
    }
    // Continue with form submission...
  };
}
```

## 📚 API Reference

### `isTempMail(email: string): boolean`
Check if an email address uses a temporary domain.

### `isTempMailDomain(domain: string): boolean`
Check if a domain is a temporary email domain.

### `validateEmail(email: string): void`
Validate an email and throw an error if it uses a temporary domain.

### `isBlocked(domain: string): boolean`
Alias for `isTempMailDomain()`.

### `getBlockedDomainsCount(): number`
Get the total number of blocked domains.

### `getBlockedDomains(): string[]`
Get all blocked domains as an array.

## 🎯 Use Cases

- ✅ User registration validation
- ✅ Newsletter subscription forms
- ✅ Contact form spam prevention
- ✅ E-commerce checkout validation
- ✅ API rate limiting
- ✅ Account verification

## 🚫 Blocked Domains

This package blocks over **4,492** temporary email domains including:

- tempmail.com
- 10minutemail.net
- guerrillamail.com
- mailinator.com
- yopmail.com
- disposablemail.com
- And 4,486 more...

## ⚡ Performance

- **Fast lookups**: O(1) complexity using Set data structure
- **Lazy loading**: Domains loaded only when first needed
- **Memory efficient**: Domains cached in memory after first load
- **No network calls**: Everything works offline

## 🤝 Contributing

Contributions are welcome! If you find a temporary email domain that should be blocked:

1. Fork the repository
2. Add the domain to `domains.txt`
3. Run `npm test` to verify
4. Submit a pull request

## 📄 License

MIT © 2024

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/tempmail-blocker)
- [GitHub Repository](https://github.com/yourusername/tempmail-blocker)
- [Report Issues](https://github.com/yourusername/tempmail-blocker/issues)

## 💡 Support

If you find this package helpful, please:
- ⭐ Star the repository
- 🐛 Report issues
- 📢 Share with others
- 💖 Contribute new domains

---

Made with ❤️ to fight spam

