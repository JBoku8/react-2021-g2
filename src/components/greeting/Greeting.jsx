function Greeting({ text, title }) {
  return (
    <div>
      <h2 className="text-muted fs-1" title={title}>
        {text}
      </h2>
    </div>
  );
}

export default Greeting;
