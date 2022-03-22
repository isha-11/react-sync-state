import { useEffect } from 'react';
import { useSyncState } from './react-sync-state/useSyncState';

export const App = ({ length }: { length: number }) => {
  const [getValue, setValue] = useSyncState('');

  useEffect(() => {
    const onChange = (event: KeyboardEvent) => {
      getValue().length < length && setValue(getValue() + event.key);
    };

    document.addEventListener('keydown', onChange);

    return () => {
      document.removeEventListener('keydown', onChange);
    };
  }, [getValue, setValue]);

  return (
    <>
      <main className='App' aria-label='value'>
        {getValue()}
      </main>
    </>
  );
};
