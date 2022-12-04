import React from "react";
import Navbar from './navbar'
import Sidebar from "./sidebar";

export default class Dashboard extends React.Component<{}, {
    isLoggedIn: undefined | boolean,
}> {
    constructor(props: never) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    componentDidMount(): void {
        this.state.isLoggedIn !== true && window.location.replace('/login')
    }

    render() {
        return (
            <>
                <Navbar/>
                <Sidebar/>
            </>
        )
    }
}