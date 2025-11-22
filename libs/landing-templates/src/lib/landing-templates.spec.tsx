import { render } from '@testing-library/react';

import WebbitstudioLandingTemplates from './landing-templates';

describe('WebbitstudioLandingTemplates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebbitstudioLandingTemplates />);
    expect(baseElement).toBeTruthy();
  });
});
