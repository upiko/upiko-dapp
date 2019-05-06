import React from 'react'
import MyTestDisplayComponent from '../components/test/loading/MyTestDisplayComponent';
import ChainStateRender from '../components/chainstate/ChainStateRender';


export default function Test() {
  return (
    <div>
      <p>==--* test  +___=-`</p>
      <ChainStateRender>
        <MyTestDisplayComponent />
      </ChainStateRender>
    </div>
  )
}
