import { useState } from "react"
import FormAdd from "./Ex06_bai_tong_hop/FormAdd"
import ConfirmDelete from "./Ex06_bai_tong_hop/ConfirmDelete";
import ConfirmBlog from "./Ex06_bai_tong_hop/ConfirmBlog";

function App() {
  const [ students, setStudents] = useState([
    {
      id:1,
      fullName: "nguyen van a",
      dateOfBirth:"02/08/1998",
      email: "nguyenvana@gmail.com",
      address: "thanh xuan, ha noi",
      status: true,
    },
     {
      id:2,
      fullName: "nguyen van b",
      dateOfBirth:"03/09/1998",
      email: "nguyenvanb@gmail.com",
      address: "thanh xuan, ha noi",
      status: false,
    },
     {
      id:3,
      fullName: "nguyen van c",
      dateOfBirth:"02/07/1996",
      email: "nguyenvanc@gmail.com",
      address: " ha noi",
      status: false,
    },
     {
      id:4,
      fullName: "nguyen van d",
      dateOfBirth:"02/10/1996",
      email: "nguyenvand@gmail.com",
      address: "hung yen",
      status: true,
    },
  ])
  //FormAdd
  const [openFormAdd, serOpenFormAdd]= useState(false);
  const handleOpenFormAdd = ()=> {
    serOpenFormAdd(true)
  };
  const handleCloseFormAdd = ()=> {
    serOpenFormAdd(false)
  };
  const[formValueAdd, setFormValueAdd] = useState({});
  const handleChange = (e) => {
       const{name, value} = e.target;
      const newvalue = {
        ...formValueAdd,
        [name]: value,
        id: new Date().getTime(),
        status : true,
      };
      setFormValueAdd(newvalue);
  };
  const handleAdd = ()=>{
  const cloneStudents = [...students];
  cloneStudents.push(formValueAdd);
  setStudents(cloneStudents);
  handleCloseFormAdd();
  }

  //comfirm block
  const [openConfirmBlog, setOpenConFirmBlog] = useState(false);
  const handleOpenConfirmBlog =() => {
    setOpenConFirmBlog(true);
  };
  const handleCloseConfirmBlog = ()=> {
    setOpenConFirmBlog(false)
  };

  //confirm delete
  const [openConfirmDelete, setOpenConFirmDelete] = useState(false);
  const handleOpenConfirmDelete = () =>{
    setOpenConFirmDelete(true)
  }; 
  const handleCloseConfirmDelete = () =>{
    setOpenConFirmDelete(false)
  };



  return (
    <>
     <>
  <div className="w-[80%] m-auto mt-4 h-[100vh]">
    <main className="main">
      <header className="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button className="btn btn-primary" onClick={handleOpenFormAdd}>Thêm mới nhân viên</button>
      </header>
      <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          style={{ width: 350 }}
          type="text"
          className="form-control"
          placeholder="Tìm kiếm theo email"
        />
        <i className="fa-solid fa-arrows-rotate" title="Refresh" />
      </div>
      {/* Danh sách nhân viên */}
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th colSpan={2}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((value, index) =>(<tr key={index}> 
            <td>{index+1}</td>
            <td>{value.fullName}</td>
            <td>{value.dateOfBirth}</td>
            <td>{value.email}</td>
            <td>{value.address}</td>
            <td>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className={`status ${value.status ? "status-active" : "status-stop"}`} />
                <span> {value.status ? "dang hoat dong" : "ngung hoat dong"}</span>
              </div>
            </td>
            <td>
              <span className="button button-block" onClick={handleOpenConfirmBlog}>{value.status ? "chan" : "bo chan"}</span>
            </td>
            <td>
              <span className="button button-edit">Sửa</span>
            </td>
            <td>
              <span className="button button-delete" onClick={handleOpenConfirmDelete}>Xóa</span>
            </td>
          </tr>))};
</tbody>
      </table>
      <footer className="d-flex justify-content-end align-items-center gap-3">
        <select className="form-select">
          <option selected="">Hiển thị 10 bản ghi trên trang</option>
          <option>Hiển thị 20 bản ghi trên trang</option>
          <option>Hiển thị 50 bản ghi trên trang</option>
          <option>Hiển thị 100 bản ghi trên trang</option>
        </select>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </footer>
    </main>
  </div>
  {/* Form thêm mới nhân viên */}
 <FormAdd openFormAdd = {openFormAdd} handleCloseFormAdd = {handleCloseFormAdd} handleChange = {handleChange} handleAdd={handleAdd} formValueAdd = {formValueAdd}></FormAdd>
  {/* Modal xác nhận chặn tài khoản */}
  <ConfirmBlog openConfirmBlog = {openConfirmBlog} handleCloseConfirmBlog={handleCloseConfirmBlog}></ConfirmBlog>
  {/* Modal xác nhận xóa tài khoản */}
 <ConfirmDelete openConfirmDelete= {openConfirmDelete} handleCloseConfirmDelete ={handleCloseConfirmDelete}></ConfirmDelete>
</>

    </>
  )
}

export default App
