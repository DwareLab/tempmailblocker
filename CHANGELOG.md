# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-06

### Added
- Initial release of tempmail-blocker package
- Core functionality to block 4,492 temporary email domains
- `isTempMail()` function to check if email uses temporary domain
- `isTempMailDomain()` function to check if domain is temporary
- `validateEmail()` function to validate and throw error if temporary
- `isBlocked()` function as alias for domain checking
- `getBlockedDomainsCount()` function to get total blocked domains
- `getBlockedDomains()` function to get all blocked domains as array
- TypeScript support with full type definitions
- Comprehensive documentation and examples
- Zero external dependencies
- MIT License

### Features
- Fast O(1) domain lookups using Set data structure
- Lazy loading of domain list for optimal performance
- Case-insensitive email and domain matching
- Support for both CommonJS and ES modules
- Full TypeScript type definitions included

### Documentation
- Complete README with usage examples
- TypeScript usage examples
- Express.js integration examples
- React integration examples
- Publishing guide for npm
- Package summary documentation

### Testing
- Comprehensive test suite
- Example files for JavaScript and TypeScript
- Validation tests for all core functions

---

## Future Releases

### [Unreleased]
- Additional domain sources
- Automatic domain list updates
- Performance optimizations
- Additional validation options
- Custom domain list support
- Whitelist functionality
- Domain pattern matching
- API for domain suggestions

---

## Version History

- **1.0.0** (2024-11-06) - Initial release

---

## How to Update

To update to the latest version:

```bash
npm update tempmail-blocker
```

Or install a specific version:

```bash
npm install tempmail-blocker@1.0.0
```

---

## Contributing

To contribute to this changelog:
1. Follow the format above
2. Add new entries under [Unreleased]
3. Move to new version section when releasing
4. Include version number and date
5. Categorize changes: Added, Changed, Deprecated, Removed, Fixed, Security

