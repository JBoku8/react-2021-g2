import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component test', () => {
  it('should render greeting component with defaults', () => {
    render(<Greeting />);

    const greetingElement = screen.getByText('default');

    expect(greetingElement).toBeInTheDocument();
    expect(greetingElement).toHaveAttribute('title', 'default title');
  });

  it('should render greeting with correct props', () => {
    const props = {
      text: 'text',
      title: 'title',
    };
    render(<Greeting {...props} />);

    const greetingElement = screen.getByText(props.text);

    expect(greetingElement).toBeInTheDocument();
    expect(greetingElement).toHaveAttribute('title', props.title);
  });
});
