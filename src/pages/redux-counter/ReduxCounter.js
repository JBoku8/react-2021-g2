import { useDispatch, useSelector } from 'react-redux';

import {
  addNumberAction,
  resetNumberAction,
  subtractNumberAction,
} from '../../redux/actions/common-actions';
import { counterSelector, messageSelector } from '../../redux/selectors';

function ReduxCounter() {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);
  const message = useSelector(messageSelector);

  return (
    <div className="row">
      <div className="col-12 mb-2">
        <h2 className="text-muted">Redux Counter - {counter}</h2>
        <h4 className="text-primary">{message}</h4>
      </div>
      <div className="col-12 d-grid gap-1">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(addNumberAction(5));
          }}>
          Add Number - Action
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(subtractNumberAction(5));
          }}>
          Subtract Number - Action
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(resetNumberAction());
          }}>
          Reset Number - Action
        </button>
      </div>
    </div>
  );
}

export default ReduxCounter;
