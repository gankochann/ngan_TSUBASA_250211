import React from 'react'
import Heared from './Heared'
import Body from './Body'

export default function Bai_tap5() {
  return (
   <>
  {/* Hello world */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/style.css" />
  <title>Basic React Lab</title>
  <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
        {/* START CONTROL */}
        {/* END CONTROL */}
        {/* START LIST STUDENT */}
     <Heared></Heared>
        {/* END LIST STUDENT */}
      </div>
    </div>
    {/* START FORM SINH VIEN */}
   <Body></Body>
    {/* END FORM SINH VIÊN */}
  </div>
</>

  )
}
