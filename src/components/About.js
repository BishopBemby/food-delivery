import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* functional component */}
      <User name="John Doe" />
      {/* class component with 2 different instances*/}
      <UserClass name="John Doe from class component." location="New York" />
      <UserClass
        name="Bishop Bemby from class component."
        location="Amritsar"
      />
    </div>
  );
};

//expected order of parent children life cycle:

//parent constructor
//parent render
//child1 constructor
//child1 render
//child1 componentDidMount
//child2 constructor
//child2 render
//child2 componentDidMount
//parent componentDidMount

//But above is wrong. So the correct order is -
//parent constructor
//parent render
//child1 constructor
//child1 render
//child2 constructor
//child2 render
//<DOM Updates- Batched below>
//child1 componentDidMount
//child2 componentDidMount
//parent componentDidMount

//Why? = Because the child components are mounted first, rendered batched together,and during commit phase, are batched together to do didMount, then the parent component is mounted.

export default About;
