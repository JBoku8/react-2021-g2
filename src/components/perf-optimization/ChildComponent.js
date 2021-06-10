import React, { useEffect } from 'react';

function ChildComponent(props) {
  console.log('RENDERING CHILD COMPONENT');

  useEffect(() => {
    props.fetchData('users');
  }, [props.fetchData]);

  return (
    <div>
      <h2>Child Component</h2>
      <h4>{props.title}</h4>
    </div>
  );
}

export default React.memo(ChildComponent);
