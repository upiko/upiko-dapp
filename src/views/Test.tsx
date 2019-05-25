import React from 'react'
import MyTestDisplayComponent from '../components/test/MyTestDisplayComponent';



export default function Test(props:any) {
 
  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            <div className="heading-underline"></div>
           
              <MyTestDisplayComponent />
            
          </div>
        </div>
      </div>
    </div>
  )
}
