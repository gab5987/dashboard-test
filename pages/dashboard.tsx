import axios from "axios";

import React from "react";
import Navbar from './navbar'
import Sidebar from "./sidebar";
import UserList from './userList';

export default class Dashboard extends React.Component {

    UNSAFE_componentWillMount(): void { this.axiosGet() }

    async axiosGet() {
        const searchParams = new URLSearchParams(window.location.search)
        axios({
            method: 'GET',
            url: `/api/auth/Auth?jdw=${searchParams.get("q")}`
        })
        .catch((error) => {
            alert(error)
            switch(error.response.status) {
                case 200: break;
                case 500: alert("Erro interno de servidor"); break;
                default: window.location.replace('/login'); break;
            };
        })
    }

    render() {
        return <IsLoggedIn />
    }
}

const IsLoggedIn = () => {
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