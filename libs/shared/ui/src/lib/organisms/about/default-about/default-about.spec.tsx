import { render } from '@testing-library/react';

import DefaultAbout from './default-about';

describe('DefaultAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultAbout />);
    expect(baseElement).toBeTruthy();
  });
});
