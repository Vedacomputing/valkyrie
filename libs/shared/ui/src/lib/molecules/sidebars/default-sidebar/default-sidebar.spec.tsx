import { render } from '@testing-library/react';

import DefaultSidebar from './default-sidebar';

describe('DefaultSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DefaultSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
