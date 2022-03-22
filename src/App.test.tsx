import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { App } from './App';

describe('Input', () => {
  it('should display new value on key down', () => {
    render(<App />);
    act(() => type('Jest is best'));

    expect(screen.getByLabelText('value')).toHaveTextContent('Jest is best');
  });
});

const type = (word: string) => {
  word
    .split('')
    .forEach((letter) =>
      document.dispatchEvent(new KeyboardEvent('keydown', { key: letter })),
    );
};
