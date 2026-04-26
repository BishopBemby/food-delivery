import React from "react";

class HandleResizeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = (event) => {
    // Handle resize logic here
    console.log("Window resized", event.target.innerWidth, event.target.innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div>
        <h1>Handle Resize Component</h1>
        <p>Resize the window to see the effect.</p>
      </div>
    );
  }
}

export default HandleResizeComponent;