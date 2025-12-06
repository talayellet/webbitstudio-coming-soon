import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { TOAST_DURATION_MS } from '@webbitstudio/shared-utils';
import { CheckCircleIcon } from '../svg-icons';
import { toastStyles, TOAST_EXIT_ANIMATION_OFFSET_MS } from './utils';

export interface ToastProps {
  /**
   * Message to display in the toast
   */
  message: string;
  /**
   * Whether the toast is visible
   */
  isVisible: boolean;
  /**
   * Duration in milliseconds before auto-dismiss
   * @default 3000
   */
  duration?: number;
  /**
   * Callback when the toast is dismissed
   */
  onDismiss: () => void;
}

/**
 * Toast component for displaying success messages
 * Automatically dismisses after the specified duration with a fade-out animation
 * Accessible with proper ARIA attributes and keyboard support
 */
export const Toast = ({
  message,
  isVisible,
  duration = TOAST_DURATION_MS,
  onDismiss,
}: ToastProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsExiting(false);
      return;
    }

    // Start exit animation before actual dismiss
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, duration - TOAST_EXIT_ANIMATION_OFFSET_MS);

    const dismissTimer = setTimeout(() => {
      onDismiss();
    }, duration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(dismissTimer);
    };
  }, [isVisible, duration, onDismiss]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className={clsx(
        toastStyles.container,
        isExiting ? toastStyles.containerExiting : toastStyles.containerVisible
      )}
    >
      <CheckCircleIcon className={toastStyles.icon} />
      <p className={toastStyles.message}>{message}</p>
    </div>
  );
};
