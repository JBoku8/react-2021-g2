import { useState } from 'react';
import { TEST_IDS } from '../../utils/testids';
import Greeting from '../greeting';
import { Button } from '../ui';
import Limitation from './Limitation';
// import { firstName as username } from "../../utils/constants";

const Welcome = ({ message, startValue = 0 }) => {
  const [value, setValue] = useState(message);
  const [counter, setCounter] = useState(startValue);

  const styles = {
    color: 'seagreen',
    textAlign: 'center',
  };
  // newValue !== oldValue
  // newObject !== oldObject
  const onClickHandler = () => {
    setValue('state updated');
  };

  const onAdd = () => {
    setCounter(counter + 1);
  };
  const onMinus = () => {
    setCounter(counter - 1);
  };
  const onReset = () => {
    setCounter(0);
  };

  // conditional rendering example
  if (counter === 10) {
    return <Limitation onClick={onReset} message="Limit has been reached" />;
  }

  return (
    <div className="">
      <h1
        title="Title example"
        style={styles}
        data-testid={TEST_IDS.welcome.title}>
        {value}
      </h1>
      <Greeting text={counter} title={`Current counter value is ${counter}`} />
      <Button
        onClick={onReset}
        text="Reset Counter"
        type="default"
        data-testid={TEST_IDS.welcome.resetButton}
      />
      <Button
        onClick={onAdd}
        text="Add value"
        type="danger"
        data-testid={TEST_IDS.welcome.addButton}
      />
      <Button
        onClick={onMinus}
        text="Subtract value"
        type="warning"
        data-testid={TEST_IDS.welcome.subtractButton}
      />
      <Button onClick={onClickHandler} type="danger" />
    </div>
  );
};

export default Welcome;
