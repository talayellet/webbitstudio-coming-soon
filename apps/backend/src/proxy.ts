import { NextRequest, NextResponse } from 'next/server';
import {
  CORS_HEADERS,
  CORS_METHODS,
  CORS_ALLOWED_HEADERS,
} from '@webbitstudio/data-access/server';

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:4300';

/**
 * Proxy to enable CORS for API routes
 * This allows the frontend to call the backend API from a different origin
 */
export function proxy(request: NextRequest) {
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        [CORS_HEADERS.ALLOW_ORIGIN]: ALLOWED_ORIGIN,
        [CORS_HEADERS.ALLOW_METHODS]: CORS_METHODS,
        [CORS_HEADERS.ALLOW_HEADERS]: CORS_ALLOWED_HEADERS,
        [CORS_HEADERS.ALLOW_CREDENTIALS]: 'true',
      },
    });
  }

  // Add CORS headers to the response
  const response = NextResponse.next();
  response.headers.set(CORS_HEADERS.ALLOW_ORIGIN, ALLOWED_ORIGIN);
  response.headers.set(CORS_HEADERS.ALLOW_CREDENTIALS, 'true');

  return response;
}

// Apply proxy only to API routes
export const config = {
  matcher: '/api/:path*',
};
