import React from "react";

export default class Home extends React.Component{
  componentDidMount(): void {
    window.location.replace('/login')
  }

  render() { return <div/> }
}
