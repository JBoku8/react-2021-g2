import React from 'react';

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    // SEND REPORT
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      // Error path
      return (
        <div className="container">
          <h2 className="text-danger">Something went wrong.</h2>
          <a href="/">Home Page</a>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return <div className="container-fluid">{children}</div>;
  }
}

export default ErrorBoundary;
