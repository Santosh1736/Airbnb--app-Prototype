import React from "react";

class Hello extends React.Component{

  render (){
      return <div>Hello {this.props.firstName} {this.props.lastName} !</div>;

  }

}
Hello.defaultProps={
  firstName:"Santosh",
  lastName:"Jaiswal"

}
export default Hello;
