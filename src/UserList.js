
  
import axios from "axios";
import React, { useState, useEffect } from 'react'
import {ListGroup} from 'react-bootstrap';
const UserList = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{setUsers(res.data)})
    }, []);
    return (
        <div className="List">
            {users.map(user=>(<div key={user.id}>
                <ListGroup className="ListGroup">
                        <ListGroup.Item className="title" >List of Users {user.id}</ListGroup.Item>
                        <ListGroup.Item action variant="primary"><h4>Name :</h4>{user.name}</ListGroup.Item>
                        <ListGroup.Item action variant="success"><h4>Email :</h4> {user.email}</ListGroup.Item>
                        <ListGroup.Item action variant="danger"><h4>Website :</h4> {user.website}</ListGroup.Item>
                </ListGroup>
            </div>))}
            
        </div>
    )
}

export default UserList