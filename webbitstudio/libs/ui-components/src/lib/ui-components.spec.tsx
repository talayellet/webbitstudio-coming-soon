import { render } from '@testing-library/react';

import WebbitstudioUiComponents from './ui-components';

describe('WebbitstudioUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebbitstudioUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
