// TypeScript usage examples for tempmail-blocker

import { 
  isTempMail, 
  isTempMailDomain, 
  validateEmail,
  getBlockedDomainsCount,
  getBlockedDomains
} from './src/index';

// Example 1: Simple email validation
function checkEmail(email: string): boolean {
  return !isTempMail(email);
}

console.log(checkEmail('user@gmail.com')); // true
console.log(checkEmail('user@tempmail.com')); // false

// Example 2: User registration validation
interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

function validateRegistration(data: RegistrationData): { valid: boolean; error?: string } {
  if (isTempMail(data.email)) {
    return {
      valid: false,
      error: 'Temporary email addresses are not allowed'
    };
  }
  
  return { valid: true };
}

// Example 3: Express.js middleware with TypeScript
import { Request, Response, NextFunction } from 'express';

function blockTempMailMiddleware(req: Request, res: Response, next: NextFunction): void {
  const email = req.body.email as string;
  
  if (email && isTempMail(email)) {
    res.status(400).json({
      error: 'Temporary email addresses are not allowed'
    });
    return;
  }
  
  next();
}

// Example 4: Domain whitelist checker
function isAllowedDomain(domain: string): boolean {
  return !isTempMailDomain(domain);
}

// Example 5: Batch email validation
function validateEmailList(emails: string[]): { valid: string[]; invalid: string[] } {
  const result = {
    valid: [] as string[],
    invalid: [] as string[]
  };
  
  emails.forEach(email => {
    if (isTempMail(email)) {
      result.invalid.push(email);
    } else {
      result.valid.push(email);
    }
  });
  
  return result;
}

// Example 6: Custom error handling
class TempMailError extends Error {
  constructor(email: string) {
    super(`The email address ${email} uses a temporary domain and is not allowed`);
    this.name = 'TempMailError';
  }
}

function strictEmailValidation(email: string): void {
  if (isTempMail(email)) {
    throw new TempMailError(email);
  }
}

// Example 7: React form validation
interface FormErrors {
  email?: string;
}

function validateForm(email: string): FormErrors {
  const errors: FormErrors = {};
  
  if (isTempMail(email)) {
    errors.email = 'Please use a permanent email address';
  }
  
  return errors;
}

// Example 8: Statistics and reporting
function getBlockedDomainsReport(): {
  total: number;
  sample: string[];
} {
  return {
    total: getBlockedDomainsCount(),
    sample: getBlockedDomains().slice(0, 10)
  };
}

console.log('Blocked domains report:', getBlockedDomainsReport());

