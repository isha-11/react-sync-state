import { useEffect, useState } from 'react';
import { useSyncState } from './react-sync-state/useSyncState';
window.type = (element) => {
  element.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
  element.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }));
  element.dispatchEvent(new KeyboardEvent('keydown', { key: 'c' }));
  element.dispatchEvent(new KeyboardEvent('keydown', { key: 'd' }));
  element.dispatchEvent(new KeyboardEvent('keydown', { key: 'e' }));
  element.dispatchEvent(new KeyboardEvent('keydown', { key: 'f' }));
  element.dispatchEvent(new KeyboardEvent('keydown', { key: 'g' }));
};

export const App = () => {
  // const [value, setValue] = useState('');
  const [value, setValue] = useSyncState('');

  useEffect(() => {
    const onChange = (event: KeyboardEvent) => {
      setValue(value + event.key);
      console.log(value, event.key);
    };

    document.addEventListener('keydown', onChange);

    return () => document.removeEventListener('keydown', onChange);
  }, []);

  return (
    <>
      <main className='App' aria-label='value'>
        {value}
      </main>
    </>
  );
};
