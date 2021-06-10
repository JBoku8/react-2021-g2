import './button.css';

function Button({
  type = 'none',
  text = 'default text',
  buttonType = 'button',
  onClick,
  className = '',
  ...props
}) {
  if (type === 'none') {
    return null;
  }

  return (
    <button
      className={['btn', 'mx-1', type, className].join(' ')}
      onClick={onClick}
      type={buttonType}
      {...props}>
      {text}
    </button>
  );
}

export default Button;
