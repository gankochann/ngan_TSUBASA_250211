import React from 'react'
import { Button, Table } from 'react-bootstrap'

export default function Table_Tailwind() {
  return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
            <th>Stt</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>1/1/1999</td>
            <td>nguyenVanA@gmail.com</td>
            <td>Hà nội</td>
            <td className="d-flex gap-2 justify-content-center">
                <Button variant="warning">Sửa</Button>
                <Button variant="danger">Xóa</Button>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Tran thi b</td>
            <td>Nu</td>
            <td>02/02/1995</td>
            <td>tranthib@gmail.com</td>
            <td>TP.Ho Chi Minh</td>
            <td className="d-flex gap-2 justify-content-center">
                            <Button variant="warning">Sửa</Button>
                            <Button variant="danger">Xóa</Button>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>pham van c</td>
            <td>Nam</td>
            <td>3/3/1992</td>
            <td>phamvanc@gmail.com</td>
            <td>Hà nội</td>
            <td className="d-flex gap-2 justify-content-center">
                            <Button variant="warning">Sửa</Button>
                            <Button variant="danger">Xóa</Button>
            </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
