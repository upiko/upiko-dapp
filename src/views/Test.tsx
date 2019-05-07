import React from 'react'
import MyTestDisplayComponent from '../components/test/loading/MyTestDisplayComponent';
import ChainStateRender from '../components/chainstate/ChainStateRender';


export default function Test() {
  return (
    <div className="offset">
      <div className="col-12 narrow text-center">
        <p>==--* test  +___=-`</p>
        <ChainStateRender>
          <MyTestDisplayComponent />
        </ChainStateRender>
     </div>
    </div>
  )
}
