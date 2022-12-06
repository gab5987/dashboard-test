import React from "react";
import Navbar from './navbar'
import Sidebar from "./sidebar";
import UserList from './userList';
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";


export default function Dashboard(){
    const {status, data} = useSession();

    console.log(status)
    useEffect(() => {
        (status === 'unauthenticated') && window.location.replace("/login");
    }, [status])

    if(status === 'loading') return <p> Loading... </p>

    if(status === 'authenticated') return <IsLoggedIn />
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