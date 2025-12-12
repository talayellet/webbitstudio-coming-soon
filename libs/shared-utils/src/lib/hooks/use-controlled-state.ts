import { useState, useCallback } from 'react';

interface UseControlledStateProps<T> {
  controlledValue: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}

/**
 * Hook for managing controlled/uncontrolled state pattern.
 * Allows a component to work both as a controlled component (when parent provides value)
 * and uncontrolled component (when parent doesn't provide value).
 *
 * @template T - Type of the state value
 * @param params - Hook parameters
 * @param params.controlledValue - The value provided by parent (controlled mode)
 * @param params.defaultValue - The default value used when uncontrolled
 * @param params.onChange - Optional callback called when value changes
 * @returns Tuple of [currentValue, handleChange]
 *
 * @example
 * ```tsx
 * // Component that can be controlled or uncontrolled
 * const MyComponent = ({ value, defaultValue = 'default', onChange }) => {
 *   const [currentValue, handleChange] = useControlledState({
 *     controlledValue: value,
 *     defaultValue,
 *     onChange
 *   });
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
export const useControlledState = <T>({
  controlledValue,
  defaultValue,
  onChange,
}: UseControlledStateProps<T>): readonly [T, (value: T) => void] => {
  const [internalValue, setInternalValue] = useState<T>(defaultValue);

  // Determine if component is controlled (parent provides value different from default)
  const isControlled = controlledValue !== defaultValue;

  // Use controlled value if controlled, otherwise use internal state
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = useCallback(
    (newValue: T) => {
      // Update internal state if uncontrolled
      if (!isControlled) {
        setInternalValue(newValue);
      }
      // Always call onChange callback if provided
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  return [value, handleChange] as const;
};
