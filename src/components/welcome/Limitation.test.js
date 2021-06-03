import { render, screen } from '@testing-library/react';
import Limitation from './Limitation';

describe('Limitation component test', () => {
  it('should render limitation component with message', () => {
    render(<Limitation message="message" />);

    const messageElement = screen.getByText('message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should render limitation component with button and execute onclick', () => {
    const onClick = jest.fn();
    render(<Limitation onClick={onClick} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    buttonElement.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
