import './button.css';

function Button({
  type = 'none',
  text = 'default text',
  buttonType = 'button',
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
      type={buttonType}>
      {text}
    </button>
  );
}

export default Button;
