import { useCallback, useRef, useState } from 'react';

export const useSyncState = <T>(initialValue: T): [T, (value: T) => void] => {
  const valueRef = useRef<T>(initialValue);
  const [value, setValue] = useState<T>(initialValue);

  const setNewValue = (newValue: T) => {
    valueRef.current = newValue;
    setValue(newValue);
  };
  return [
    valueRef.current,
    setNewValue,
    // useCallback(
    //  ,
    //   [valueRef, setValue],
    // ),
  ];
};
