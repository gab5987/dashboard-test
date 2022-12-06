import React from "react";
import { signIn } from "next-auth/react";

export default class Home extends React.Component{
  componentDidMount(): void {
    signIn();
  }

  render() { return <div/> }
}
