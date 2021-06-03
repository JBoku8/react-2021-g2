import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component test', () => {
  it('should not render button with defaults', () => {
    render(<Button />);
    const buttonElement = screen.queryByRole('button');
    expect(buttonElement).toBeNull();
  });

  it('should render button with different type', () => {
    render(<Button type="warning" />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toHaveTextContent('default text');
  });

  it('should render button with correct props', () => {
    const props = {
      type: 'danger',
      buttonType: 'submit',
      text: 'custom text',
      className: 'testClass',
    };
    render(<Button {...props} />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', props.buttonType);
    expect(buttonElement.classList.contains(props.className)).toBeTruthy();
    expect(buttonElement).toHaveTextContent(props.text);
  });

  it('should execute onClick handler when button is clicked', () => {
    const onClickHandler = jest.fn();
    render(<Button onClick={onClickHandler} type="default" />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    buttonElement.click();
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
