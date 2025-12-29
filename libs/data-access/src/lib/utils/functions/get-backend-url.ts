declare const __BACKEND_URL__: string;

/**
 * Gets the backend URL from environment variables
 * Falls back to localhost for development
 */
export const getBackendUrl = (): string => {
  return __BACKEND_URL__;
};
