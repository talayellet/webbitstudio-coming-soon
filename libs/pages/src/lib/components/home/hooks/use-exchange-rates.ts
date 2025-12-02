import { useQuery } from '@tanstack/react-query';
import {
  fetchExchangeRates,
  type ExchangeRateResponse,
} from '@webbitstudio/data-access';
import { WEBBIT_CURRENCY } from '@webbitstudio/shared-utils';

const EXCHANGE_RATE_STALE_TIME = 1000 * 60 * 60; // 1 hour
const EXCHANGE_RATE_CACHE_TIME = 1000 * 60 * 60 * 24; // 24 hours
const RETRY_BASE_DELAY = 1000; // 1 second
const RETRY_MAX_DELAY = 30000; // 30 seconds
const RETRY_BACKOFF_MULTIPLIER = 2;

/**
 * Hook to fetch exchange rates with caching
 * Uses TanStack Query for automatic caching and error handling
 */
export const useExchangeRates = () => {
  return useQuery<ExchangeRateResponse, Error>({
    queryKey: ['exchangeRates', WEBBIT_CURRENCY.USD],
    queryFn: () => fetchExchangeRates(WEBBIT_CURRENCY.USD),
    staleTime: EXCHANGE_RATE_STALE_TIME,
    gcTime: EXCHANGE_RATE_CACHE_TIME,
    retry: 2,
    retryDelay: (attemptIndex) =>
      Math.min(
        RETRY_BASE_DELAY * RETRY_BACKOFF_MULTIPLIER ** attemptIndex,
        RETRY_MAX_DELAY
      ),
    // Don't refetch on window focus to avoid excessive API calls
    refetchOnWindowFocus: false,
    // Keep previous data while fetching new data
    placeholderData: (previousData) => previousData,
  });
};
