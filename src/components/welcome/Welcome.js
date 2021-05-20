import { useState } from 'react';
import Greeting from '../greeting';
import { Button } from '../ui';
import Limitation from './Limitation';
// import { firstName as username } from "../../utils/constants";

const Welcome = ({ message }) => {
  const [value, setValue] = useState(message);
  const [counter, setCounter] = useState(0);

  const styles = {
    color: 'seagreen',
    textAlign: 'center',
  };
  // newValue !== oldValue
  // newObject !== oldObject
  const onClickHandler = (event) => {
    console.log('ADADADAD');
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
      <h1 title="Title example" style={styles}>
        {value}
      </h1>
      <Greeting text={counter} title={`Current counter value is ${counter}`} />
      <Button onClick={onReset} text="Reset Counter" type="default" />
      <Button onClick={onAdd} text="Add value" type="danger" />
      <Button onClick={onMinus} text="Subtract value" type="warning" />
      <Button onClick={onClickHandler} type="danger" />
    </div>
  );
};

export default Welcome;
