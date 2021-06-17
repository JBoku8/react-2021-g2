import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader component test', () => {
  it('should render loader with default message', () => {
    render(<Loader />);
    const loaderMessageElement = screen.getByText('default');
    expect(loaderMessageElement).toBeInTheDocument();
  });

  it('should render loader with specified message', () => {
    const testMessage = 'testMessage';
    render(<Loader message={testMessage} />);
    const loaderMessageElement = screen.getByText(testMessage);
    expect(loaderMessageElement).toBeInTheDocument();
  });
});

describe('Loader snapshots', () => {
  test('loader renders successfully', () => {
    const component = render(<Loader />);
    expect(component).toMatchSnapshot();
  });
});
