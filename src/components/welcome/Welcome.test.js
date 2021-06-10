import { render } from '@testing-library/react';
import { TEST_IDS } from '../../utils/testids';
import Welcome from './Welcome';

const mockProps = {
  message: 'mock-message',
  startValue: 0,
};
describe('Welcome component testing', () => {
  //   let component;

  //   beforeEach(() => {
  //     component = render(<Welcome message={mockMessage} />);
  //   });

  it('should render message', () => {
    const component = render(<Welcome {...mockProps} />);

    expect(component.getByTestId(TEST_IDS.welcome.title)).toBeInTheDocument();
    expect(component.getByTestId(TEST_IDS.welcome.title)).toHaveTextContent(
      mockProps.message,
    );
  });

  it('should increase number by one', () => {
    const component = render(<Welcome {...mockProps} />);
    const addButton = component.getByTestId(TEST_IDS.welcome.addButton);
    const greeting = component.getByTestId(TEST_IDS.greeting);
    addButton.click();

    expect(greeting).toHaveTextContent(mockProps.startValue + 1);
  });
});
