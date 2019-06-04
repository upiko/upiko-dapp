import React from 'react'
import { initSideChain, addSkill } from '../../../common/Actions';
import { Store } from '../../../common/Store';
import { Card, Input, Button } from 'antd';


export default function AddSkill() {
  const { state, dispatch } = React.useContext(Store);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    console.log("AddSkill.useEffect([]), calling initSideChain");
    initSideChain(dispatch);
  }, []);



  console.log("AddSkill, state:", state);

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Add Skill" bordered={false} >
    <p className="strong-p">Enter name of new skill</p>
        <Input
          className="form-control"
          placeholder="Skill name"
          value={name}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const { name, value }: any = e.target;
            setName(value);
          }}
        />
        <div className="row">
          <Button
            type="dashed"
            onClick={() => {
              
              
              console.log("adding user", name);
              //addSkill(name, sChainState, dispatch);
              setName("");
            }}
          >
            Create
          </Button>
      </div>
    </Card>
  </div>
  )
}
