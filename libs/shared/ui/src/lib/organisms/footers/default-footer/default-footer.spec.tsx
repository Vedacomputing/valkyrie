import { render } from '@testing-library/react';

import DefaultFooter from './default-footer';

describe('DefaultFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultFooter />);
    expect(baseElement).toBeTruthy();
  });
});
