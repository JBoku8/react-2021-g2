import Button from '../ui/Button';

function Limitation({ onClick, message }) {
  return (
    <div className="row flex-column">
      <h3 className="text-danger col-4 mt-3">{message}</h3>

      <Button
        onClick={onClick}
        text="Try Again"
        type="default"
        className="col-4 mt-1"
      />
    </div>
  );
}
export default Limitation;
