import React from "react";
import Navbar from './navbar'
import Sidebar from "./sidebar";
import UserList from './userList';

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
            <div>
                <Navbar/>
                <div className="flex">
                    <Sidebar/>
                    <div className="grow h-full">
                        <UserList/>
                    </div>
                    
                </div>
            </div>
        )
    }
}