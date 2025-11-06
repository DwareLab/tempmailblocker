import * as fs from 'fs';
import * as path from 'path';

// Load the blocked domains list
let blockedDomains: Set<string>;

/**
 * Initialize the blocked domains set
 */
function initializeDomains(): void {
  if (!blockedDomains) {
    const domainsPath = path.join(__dirname, '../domains.json');
    const domainsData = fs.readFileSync(domainsPath, 'utf8');
    const domains: string[] = JSON.parse(domainsData);
    blockedDomains = new Set(domains.map(d => d.toLowerCase()));
  }
}

/**
 * Check if an email address uses a temporary/disposable email domain
 * @param email - The email address to check
 * @returns true if the email uses a blocked domain, false otherwise
 */
export function isTempMail(email: string): boolean {
  initializeDomains();
  
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Extract domain from email
  const emailParts = email.toLowerCase().trim().split('@');
  if (emailParts.length !== 2) {
    return false;
  }

  const domain = emailParts[1];
  return blockedDomains.has(domain);
}

/**
 * Check if a domain is a temporary/disposable email domain
 * @param domain - The domain to check
 * @returns true if the domain is blocked, false otherwise
 */
export function isTempMailDomain(domain: string): boolean {
  initializeDomains();
  
  if (!domain || typeof domain !== 'string') {
    return false;
  }

  return blockedDomains.has(domain.toLowerCase().trim());
}

/**
 * Validate an email address and reject if it uses a temporary domain
 * @param email - The email address to validate
 * @throws Error if the email uses a blocked domain
 */
export function validateEmail(email: string): void {
  if (isTempMail(email)) {
    throw new Error('Temporary or disposable email addresses are not allowed');
  }
}

/**
 * Get the total number of blocked domains
 * @returns The count of blocked domains
 */
export function getBlockedDomainsCount(): number {
  initializeDomains();
  return blockedDomains.size;
}

/**
 * Get all blocked domains as an array
 * @returns Array of all blocked domains
 */
export function getBlockedDomains(): string[] {
  initializeDomains();
  return Array.from(blockedDomains);
}

/**
 * Check if a domain is in the blocked list (alias for isTempMailDomain)
 * @param domain - The domain to check
 * @returns true if the domain is blocked, false otherwise
 */
export function isBlocked(domain: string): boolean {
  return isTempMailDomain(domain);
}

// Export default object with all functions
export default {
  isTempMail,
  isTempMailDomain,
  validateEmail,
  getBlockedDomainsCount,
  getBlockedDomains,
  isBlocked
};

