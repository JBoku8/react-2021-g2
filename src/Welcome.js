const Welcome = (props) => {
  const styles = {
    color: "seagreen",
    textAlign: "center",
  };
  return (
    <div>
      <h1 title="Title example" style={styles}>
        {props.message}
      </h1>
    </div>
  );
};

export default Welcome;
