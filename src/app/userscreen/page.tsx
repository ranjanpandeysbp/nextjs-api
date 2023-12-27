import React from 'react'
import Image from 'next/image'

const getAllUsers = async ()=>{
    let res: any = await fetch('http://localhost:3000/api/user')
    let data = await res.json();
    return data.users.data;
}
const Userscreen = async () => {
    let users = await getAllUsers();
    console.log(users);
  return (
    <div>
        <h2 className='text-xl'>All Users</h2>
        {
            users.map((u: any)=>{
                return <div key={u.id}>
                        <Image
                        src={u.avatar}
                        width={200}
                        height={200}
                        alt={u.first_name}
                        />
                        <h3>{u.first_name} {u.last_name}</h3>
                    </div>
            })
        }
    </div>
  )
}

export default Userscreen