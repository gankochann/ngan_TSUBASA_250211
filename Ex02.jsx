import React from 'react'
import Body1 from './Body1'
import Body2 from './Body2'

export default function Ex02() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  {/* Font Awesome */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    rel="stylesheet"
  />
  {/* MDB */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
    rel="stylesheet"
  />
  <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
             <Body1></Body1>
             <Body2></Body2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}
