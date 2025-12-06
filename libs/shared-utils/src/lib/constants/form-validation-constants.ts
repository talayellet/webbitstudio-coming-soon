/**
 * Email validation regex pattern
 * Validates standard email format: local@domain.tld
 */
export const EMAIL_REG = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
