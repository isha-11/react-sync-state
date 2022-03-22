import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { App } from './App';

describe('App', () => {
  it.each`
    length | input
    ${1}   | ${'Small_value'}
    ${5}   | ${'Long_value'}
    ${10}  | ${'Camel_is_the_ship_of_the_desert'}
    ${20}  | ${'Check_the_value'}
  `(
    'should display $length characters of $input correctly',
    ({ length, input }: { length: number; input: string }) => {
      render(<App length={length} />);
      act(() => type(input));

      expect(screen.getByLabelText('value')).toHaveTextContent(
        input.slice(0, length),
      );
    },
  );
});

const type = (word: string) => {
  word
    .split('')
    .forEach((letter) =>
      document.dispatchEvent(new KeyboardEvent('keydown', { key: letter })),
    );
};
