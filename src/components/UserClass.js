//class component
import React from "react";
class UserClass extends React.Component {
  //constructor method is used to initialize the state of the component. It is a required method in a class component. It is called before the component is mounted on the DOM. The constructor method takes props as an argument and passes it to the super class using super(props). This is necessary to access the props in the component. In the constructor method, we can also initialize the state of the component using this.state. The state is an object that holds the data that can change over time and affects the rendering of the component.
  constructor(props) {
    // console.log("constructor");
    super(props);
    //mandatory to call the super class constructor in a subclass constructor. If you do not call super(props) in the constructor of a class component, you will not be able to access this.props in the component. This is because the props are passed to the super class constructor and if you do not call it, the props will not be available in the component. So it is important to call super(props) in the constructor of a class component to ensure that the props are available in the component.

    this.state = {
      userInfo: {
        name: "Bishop Bemby",
        location: "Amritsar",
      },
    };
  }
  //render method is used to render the UI of the component. It is a required method in a class component. It returns the JSX that will be rendered on the screen. The render method is called every time the state or props of the component changes. It is also called when the component is first rendered on the screen.
  render() {
    // console.log("render");
    const { name, location } = this.props;
    const { count, count22 } = this.state;
    return (
      <div>
        {/* Never update state directly in a class component. Instead, use the setState method to update the state. */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {count} times
        </button>
        <button
          onClick={() => this.setState({ count22: this.state.count22 + 1 })}
        >
          Clicked {count22} times
        </button>
        {/* setState is a method that is used to update the state of a component, only the values to update are updated, rest are not. */}
        <h1>{name}</h1>
        <p>This is the user profile page from {location}</p>
        <p>{name} is a software developer.</p>
      </div>
    );
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  async componentDidMount() {
    // console.log("componentDidMount");
    // const data = await fetch("hhttps://api.cors.lol/?url=https://api.github.com/users/bishopbemby");
    // const json = await data?.json();
    // console.log(
    //   json
    // );
    // this.setState({ userInfo: json });
  }
}

export default UserClass;

// Here we have created a class component called UserClass. It extends the React.Component class and has a render method that returns the JSX to be rendered on the screen. We have also exported the UserClass component as the default export of the file. This means that when we import this component in another file, we can import it without using curly braces. For example, we can do import UserClass from "./UserClass"; to import this component in another file.

//Lifecycle methods in class components -
//First constructor is called to initialize the state of the component, then render method is called to render the UI of the component on the screen. After the component is rendered on the screen, the componentDidMount lifecycle method is called. This method is used to perform any side effects or data fetching after the component is rendered on the screen. It is called only once in the lifecycle of a component. After that, whenever the state or props of the component changes, the render method is called again to update the UI on the screen. After the component is updated on the screen, the componentDidUpdate lifecycle method is called. This method is used to perform any side effects or data fetching after the component is updated on the screen. It is called every time the state or props of the component changes. Finally, when the component is about to be unmounted from the DOM, the componentWillUnmount lifecycle method is called. This method is used to perform any cleanup tasks before the component is removed from the screen. It is called only once in the lifecycle of a component, just before it is removed from the DOM.

//1. componentDidMount - It is called after the component is mounted on the DOM. It is used to perform any side effects or data fetching after the component is rendered on the screen. It is called only once in the lifecycle of a component.
//2. componentDidUpdate - It is called after the component is updated on the DOM. It is used to perform any side effects or data fetching after the component is updated on the screen. It is called every time the state or props of the component changes.
//3. componentWillUnmount - It is called before the component is unmounted from the DOM. It is used to perform any cleanup tasks before the component is removed from the screen. It is called only once in the lifecycle of a component, just before it is removed from the DOM.
