import React from "react";
import { signIn } from "next-auth/react";

export default class Home extends React.Component{
  componentDidMount(): void {
    window.location.replace("/login")
  }

  render() { return <div/> }
}
