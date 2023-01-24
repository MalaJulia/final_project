import {Users} from "../components";
import {useEffect, useState} from "react";
import {usersService} from "../services";

const UsersPage = () =>{
    const [users, setUsers] = useState([])
    useEffect(() =>{
        usersService.getAll().then(({data})=> {
            setUsers(data.data)
            }
        )
    },[])
    return(
        <div>
            <Users users={users}/>
        </div>
    )
}

export {UsersPage}