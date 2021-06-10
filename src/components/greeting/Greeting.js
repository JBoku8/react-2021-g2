import { TEST_IDS } from '../../utils/testids';

function Greeting({ text = 'default', title = 'default title' }) {
  return (
    <div>
      <h2
        className="text-muted fs-1"
        title={title}
        data-testid={TEST_IDS.greeting}>
        {text}
      </h2>
    </div>
  );
}

export default Greeting;
