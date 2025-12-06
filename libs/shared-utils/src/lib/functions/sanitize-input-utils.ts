import validator from 'validator';
import {
  DEFAULT_INPUT_MAX_LENGTH,
  SANITIZE_INPUT_MAX_LENGTH,
} from '../constants';

/**
 * Sanitizes text input using validator.js to prevent XSS attacks
 * @param input - The text to sanitize
 * @returns Sanitized text with harmful content escaped and whitespace trimmed
 */
export const sanitizeTextInput = (input: string): string => {
  return validator.escape(input.trim()).substring(0, DEFAULT_INPUT_MAX_LENGTH);
};

/**
 * Parameters for sanitizing textarea input
 */
export interface SanitizeTextAreaProps {
  input: string;
  maxLength?: number;
}

/**
 * Sanitizes textarea input with newlines preserved using validator.js
 * @param params - The sanitization parameters
 * @returns Sanitized textarea content with normalized line endings
 */
export const sanitizeTextArea = ({
  input,
  maxLength = SANITIZE_INPUT_MAX_LENGTH,
}: SanitizeTextAreaProps): string => {
  return validator
    .escape(input.trim())
    .replace(/\r\n/g, '\n') // Normalize line endings
    .substring(0, maxLength);
};

/**
 * Parameters for sanitizing form data with text and textarea fields
 */
export interface SanitizeFormDataProps<T> {
  /** Form data with string values to sanitize */
  data: T;
  /** Fields that should be treated as textarea (preserve newlines, longer max length) */
  textAreaFields?: string[];
  /** Fields that should be treated as email (trim and lowercase) */
  emailFields?: string[];
}

/**
 * Sanitizes form data to prevent XSS attacks using validator.js
 * Note: SQL injection is already prevented by Prisma's parameterized queries
 * @param params - The sanitization parameters
 * @returns Sanitized form data safe for storage and transmission
 */
export const sanitizeFormData = <T extends Record<string, unknown>>({
  data,
  textAreaFields = [],
  emailFields = [],
}: SanitizeFormDataProps<T>): T => {
  const sanitized = {} as T;

  for (const [key, value] of Object.entries(data)) {
    if (value === undefined) {
      sanitized[key as keyof T] = undefined as T[keyof T];
      continue;
    }

    if (typeof value !== 'string') {
      sanitized[key as keyof T] = value as T[keyof T];
      continue;
    }

    if (emailFields.includes(key)) {
      // Normalize and validate email format
      const normalized =
        validator.normalizeEmail(value.trim()) || value.trim().toLowerCase();
      sanitized[key as keyof T] = normalized as T[keyof T];
    } else if (textAreaFields.includes(key)) {
      sanitized[key as keyof T] = sanitizeTextArea({
        input: value,
        maxLength: SANITIZE_INPUT_MAX_LENGTH,
      }) as T[keyof T];
    } else {
      sanitized[key as keyof T] = sanitizeTextInput(value) as T[keyof T];
    }
  }

  return sanitized;
};
