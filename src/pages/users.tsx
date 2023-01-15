import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserCircle } from 'react-icons/fa'
import { MdEmail, MdDelete } from 'react-icons/md'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import styles from './users.module.css'

interface userProps {
    id: string;
    name: string;
    username: string;
    email: string;
}

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
            setUsers(result.data);
        })
    }, [])

    const user: Array<userProps> = users.map(user => {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
        }
    })

    console.log(user)

    return (
        user.map(user => {
            return (
                <div className={styles.container} key={user.id}>
                    <p><FaUserCircle /> {user.username}</p>
                    <p>{user.name}</p>
                    <p><MdEmail /> {user.email}</p>
                    <button><MdDelete /></button>
                </div>
            )
        })
    );
}