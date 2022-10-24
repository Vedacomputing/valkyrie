import { render } from '@testing-library/react';

import DefaultHero from './default-hero';

describe('DefaultHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultHero />);
    expect(baseElement).toBeTruthy();
  });
});
