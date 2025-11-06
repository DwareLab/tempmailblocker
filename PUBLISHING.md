# Publishing Guide

This guide explains how to publish the `tempmail-blocker` package to npm.

## Prerequisites

1. Create an npm account at https://www.npmjs.com/signup
2. Login to npm from your terminal:
   ```bash
   npm login
   ```

## Publishing Steps

### 1. Verify Package

Before publishing, make sure everything is working:

```bash
# Run tests
npm test

# Check what will be published
npm pack --dry-run
```

### 2. Update Version (if needed)

For subsequent releases, update the version in `package.json`:

```bash
# For bug fixes
npm version patch

# For new features
npm version minor

# For breaking changes
npm version major
```

### 3. Publish to npm

```bash
# Publish to npm registry
npm publish
```

If this is your first time publishing, you might need to verify your email first.

### 4. Verify Publication

After publishing, verify the package is available:

```bash
# Search for your package
npm search tempmail-blocker

# View package info
npm info tempmail-blocker
```

### 5. Test Installation

Test that users can install your package:

```bash
# In a different directory
mkdir test-install
cd test-install
npm init -y
npm install tempmail-blocker
```

## Package Information

- **Package Name**: tempmail-blocker
- **Current Version**: 1.0.0
- **Registry**: https://www.npmjs.com/
- **Package Size**: ~30 KB (compressed)
- **Unpacked Size**: ~94 KB

## What Gets Published

The following files are included in the npm package:

- `dist/` - Compiled JavaScript and TypeScript definitions
- `domains.json` - List of blocked domains
- `README.md` - Documentation
- `LICENSE` - MIT License
- `package.json` - Package metadata

## Updating the Package

To update the package with new domains or features:

1. Make your changes
2. Update version: `npm version patch`
3. Build: `npm run build`
4. Test: `npm test`
5. Publish: `npm publish`

## Troubleshooting

### Package Name Already Taken

If the package name is taken, you can:
- Choose a different name
- Use a scoped package: `@yourusername/tempmail-blocker`

To use a scoped package, update `package.json`:
```json
{
  "name": "@yourusername/tempmail-blocker"
}
```

### Authentication Issues

If you have authentication issues:
```bash
npm logout
npm login
```

### Two-Factor Authentication

If you have 2FA enabled:
```bash
npm publish --otp=123456
```

Replace `123456` with your current OTP code.

## Post-Publishing

After publishing:

1. Update your repository URL in `package.json`
2. Add badges to README.md:
   - npm version badge
   - npm downloads badge
   - License badge
3. Create a GitHub repository and push your code
4. Consider adding:
   - GitHub Actions for CI/CD
   - Automated testing
   - Code coverage reports

## Maintenance

- Regularly update the domains list
- Monitor issues and pull requests
- Keep dependencies up to date
- Respond to user feedback

## Resources

- npm Documentation: https://docs.npmjs.com/
- Semantic Versioning: https://semver.org/
- npm Package Best Practices: https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry

