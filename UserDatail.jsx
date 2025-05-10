import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { users } from '../data/users';

export default function UserDatail() {

    const {id} = useParams();
    const [dataUser, setDataUser]  = useState([null]);
    
    useEffect(() => {
        const findUser = users.find((item) => item.id === +id);
        if(findUser) {
            setDataUser(findUser);
        }
    },[]);

    const navigate = useNavigate();
  
  return (
    <div>
       {dataUser &&  <div key={dataUser.id} className='border-[2px] border-black w-fit p-[12px]'>
            <p>Id:{dataUser.id}</p>
            <p>UserName:{dataUser.userName}</p>
            <p>Email:{dataUser.Email}</p>
            <p>Address:{dataUser.Address}</p>
            <button className='bg-blue-600 text-white w-full rounded-[5px]' onClick={()=> navigate(-1)}>quay lai</button>
        </div>}
    </div>
  )
}
