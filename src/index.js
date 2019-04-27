import React from "react";
import { createLoginNav } from "./router";
import { createAppContainer } from 'react-navigation'; 

export default createAppContainer(createLoginNav(false));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false
    };
  }

  render() {
    const { signedIn } = this.state;

    const Layout = createLoginNav(signedIn);
    return <Layout />;
  }
}