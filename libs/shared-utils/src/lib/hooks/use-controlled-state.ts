import { useState, useCallback } from 'react';

/**
 * Hook for managing controlled/uncontrolled state pattern.
 * Allows a component to work both as a controlled component (when parent provides value)
 * and uncontrolled component (when parent doesn't provide value).
 *
 * @template T - Type of the state value
 * @param controlledValue - The value provided by parent (controlled mode)
 * @param defaultValue - The default value used when uncontrolled
 * @param onChange - Optional callback called when value changes
 * @returns Tuple of [currentValue, handleChange]
 *
 * @example
 * ```tsx
 * // Component that can be controlled or uncontrolled
 * const MyComponent = ({ value, defaultValue = 'default', onChange }) => {
 *   const [currentValue, handleChange] = useControlledState(
 *     value,
 *     defaultValue,
 *     onChange
 *   );
 *
 *   return <input value={currentValue} onChange={e => handleChange(e.target.value)} />;
 * };
 *
 * // Controlled usage
 * <MyComponent value={myValue} onChange={setMyValue} />
 *
 * // Uncontrolled usage
 * <MyComponent defaultValue="initial" />
 * ```
 */
export const useControlledState = <T>(
  controlledValue: T,
  defaultValue: T,
  onChange?: (value: T) => void
): readonly [T, (value: T) => void] => {
  const [internalValue, setInternalValue] = useState<T>(defaultValue);

  // Use controlled value if it differs from default, otherwise use internal state
  const value =
    controlledValue !== defaultValue ? controlledValue : internalValue;

  const handleChange = useCallback(
    (newValue: T) => {
      // Update internal state only if uncontrolled
      if (controlledValue === defaultValue) {
        setInternalValue(newValue);
      }
      // Always call onChange callback if provided
      onChange?.(newValue);
    },
    [controlledValue, defaultValue, onChange]
  );

  return [value, handleChange] as const;
};
