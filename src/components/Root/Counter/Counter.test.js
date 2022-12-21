import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Counter from './Counter';

test('Counter component works properly', () => {
  const { getByTestId, getByText } = render(<Counter />);

  const counterValueEl = getByTestId('counter-value');
  const minusOneButtonEl = getByText('-1', { selector: 'button' });
  const plusOneButtonEl = getByText('+1', { selector: 'button' });

  expect(counterValueEl).toHaveTextContent('0');

  fireEvent.click(minusOneButtonEl);

  expect(counterValueEl).toHaveTextContent('-1');

  fireEvent.click(plusOneButtonEl);

  expect(counterValueEl).toHaveTextContent('0');

  fireEvent.click(plusOneButtonEl);

  expect(counterValueEl).toHaveTextContent('1');
});
