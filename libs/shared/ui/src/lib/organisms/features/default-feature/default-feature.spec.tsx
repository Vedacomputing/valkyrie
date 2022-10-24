import { render } from '@testing-library/react';

import DefaultFeature from './default-feature';

describe('DefaultFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultFeature />);
    expect(baseElement).toBeTruthy();
  });
});
