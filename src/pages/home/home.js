import { useEffect, useState } from 'react';

// ერთჯერადი მოქმედებნა - function() ერთხელ
// ყოველთვის კომპონენტის გადახატვის დრის = function()
// ცვლადზე დამოკიდებული function()

function HomePage() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // console.log("ერთჯერადი");
  }, []);

  useEffect(() => {
    // console.log("ყოველთვის");
  });

  useEffect(() => {
    // console.info("მნიშვნელობის შეცვლილსას");
    setMessage(value);
  }, [value]);

  return (
    <div className="row">
      <button
        className="btn btn-primary"
        onClick={() => setValue(Math.random().toString())}
      >
        Change Value
      </button>
      <button
        className="btn btn-info mt-2"
        onClick={() => setMessage(Math.random().toString())}
      >
        Change Message
      </button>
      <h2>Home Page</h2>
      <h4>
        Value -
        {value}
      </h4>
      <h4>
        Message -
        {message}
      </h4>
    </div>
  );
}

export default HomePage;
