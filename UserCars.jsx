import React from 'react'
import Cars from './Cars'
import Pic1 from '/SS04_bai_tap_01/img/Pic1.jpg'
import Pic2 from '/SS04_bai_tap_01/img/Pic2.jpg'
import Pic3 from '/SS04_bai_tap_01/img/Pic3.jpg'

export default function UserCars() {
  return (
    <div>
        <h2 style={{paddingLeft:120}}>DANH SACH NGUOI DUNG</h2>
      <div className='box-li' style={{display:"flex", justifyContent:"center", gap:20 , paddingLeft:"100px"}}>
          <Cars img = {Pic1} name = "nguyen van A" age = "21"></Cars>
        <Cars img = {Pic2} name = "nguyen van B" age ="22"></Cars>
        <Cars img = {Pic3} name ="le van C" age ="23"></Cars>
      </div>
    </div>
  )
}
