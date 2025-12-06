export const toastStyles = {
  container:
    'fixed bottom-6 left-1/2 z-[1000] -translate-x-1/2 transform flex items-center gap-3 rounded-full border border-sky-500/40 bg-slate-900/95 backdrop-blur-sm px-6 py-3 shadow-xl shadow-sky-500/20 transition-all duration-300 ease-in-out sm:bottom-8',
  containerVisible: 'translate-y-0 opacity-100 animate-slide-up',
  containerExiting: 'translate-y-2 opacity-0',
  icon: 'h-6 w-6 flex-shrink-0 text-sky-400',
  message: 'text-sm font-medium text-slate-50 sm:text-base',
} as const;
