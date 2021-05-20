import './button.css';

function Button({
  type = 'none',
  text = 'default text',
  onClick,
  className = '',
}) {
  if (type === 'none') {
    return null;
  }

  return (
    <button
      className={['btn', 'mx-1', type, className].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
