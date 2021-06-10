import { useEffect, useState, useMemo, useCallback } from 'react';
import ChildComponent from './ChildComponent';

// const numbers = [1, 2, 3, 4];
function ParentComponent() {
  const [num, setNum] = useState(0);
  const numbers = useMemo(() => [1, 2, 3, 4], []);

  const fetchData = useCallback((endpoint) => {
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  useEffect(() => {
    fetchData('todos');
  }, []);

  return (
    <div>
      <h2>Parent Component - {num}</h2>
      <button
        className="btn btn-danger mb-2"
        onClick={() => setNum((prevNum) => prevNum + 1)}>
        Add Button
      </button>
      <ChildComponent
        title="Child Component primitive value example"
        numbers={numbers}
        fetchData={fetchData}
      />
    </div>
  );
}

export default ParentComponent;
