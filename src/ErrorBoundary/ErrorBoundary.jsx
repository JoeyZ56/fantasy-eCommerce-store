//The only way to use ErrorBoundary is to wrap it around the component that you want to catch errors from.
//ErrorBoundary is a class component, so it has access to lifecycle methods.
//ErrorBoundary can only be done in class components, not functional components.

//Completely reusable component for catching errors in any component.
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent; //eslint-disable-line
    }
    return this.props.children; //eslint-disable-line
  }
}

export default ErrorBoundary;
