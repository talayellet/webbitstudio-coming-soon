export const ENDPOINTS = {
  EXCHANGE_API_BASE_URL: 'https://api.exchangerate-api.com/v4/latest',
} as const;

export type Endpoint = (typeof ENDPOINTS)[keyof typeof ENDPOINTS];
