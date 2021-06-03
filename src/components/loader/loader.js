export const Loader = ({ message = 'default' }) => {
  return (
    <div className="row">
      <h2 className="text-center text-warning">{message}</h2>
    </div>
  );
};

export default Loader;
