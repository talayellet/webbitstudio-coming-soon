import React, { createContext, useContext, ReactNode } from 'react';
import { WebbitCurrency } from '../types';
import { CONTEXT_ERROR_MESSAGES } from '../constants';
import { useCurrencyStorage, useGeoBasedCurrency } from '../hooks';

interface CurrencyContextValue {
  currency: WebbitCurrency;
  setCurrency: (currency: WebbitCurrency, isUserSelection?: boolean) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(
  undefined
);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { currency, setCurrency } = useCurrencyStorage();
  useGeoBasedCurrency(setCurrency);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error(CONTEXT_ERROR_MESSAGES.CURRENCY_PROVIDER_REQUIRED);
  }
  return context;
};
