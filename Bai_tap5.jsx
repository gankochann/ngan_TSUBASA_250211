import React from 'react'

export default function Bai_tap5() {
    let users = [
    {
        id: 1,
        userName : "nam",
        dateOfBirthday : "02/02/1998",
        gender : "nam",
        address : "thanh xuan , ha noi"
    } , 
    {
        id: 2,
        userName : "lan",
        dateOfBirthday : "02/05/1997",
        gender : "nu",
        address : "thanh xuan , ha noi"
    },
    ]
  return (
    <div>
        <table>
            <thead>
                <tr>
                <th>STT</th>
                <th>Ho va ten</th>
                <th>Ngay sinh</th>
                <th>Gioi tinh</th>
                <th>Dia chi</th>
                <th>Hanh dong</th>
                </tr>
            </thead>
            <tbody>
             {users.map((user,index)=>
               <tr key={index}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.dateOfBirthday}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>
                    <button>sua</button>
                    <button>xoa</button>
                </td>
               </tr>
             )}
            </tbody>
        </table>
    </div>
  )
}
