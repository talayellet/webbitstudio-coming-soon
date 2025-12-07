/**
 * Default styles for the Toggle component
 * These can be overridden via the styles prop
 */
export const TOGGLE_STYLES = {
  container:
    'relative inline-flex h-6 w-11 items-center justify-start rtl:justify-end rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-2 py-0.5 pl-0.5 pr-1.5',
  containerEnabled: 'bg-sky-500',
  containerDisabled: 'bg-slate-700',
  button:
    'inline-block h-4 w-4 shrink-0 transform rounded-full bg-white transition-transform',
  buttonEnabled: 'ltr:translate-x-[24px] rtl:translate-x-[24px]',
  buttonDisabled: 'ltr:translate-x-0 rtl:translate-x-0',
  disabledOpacity: 'opacity-50 cursor-not-allowed',
} as const;
