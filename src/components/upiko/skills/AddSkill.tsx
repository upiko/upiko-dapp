import React from 'react'
import { addSkill } from '../../../common/Actions';
import { Card, Input, Button } from 'antd';
import useLoom from '../../chainstate/useLoom';
import { Store } from '../../../common/Store';
import useLoomWithConfig from '../../chainstate/useLoomWithConfig';


export default function AddSkill() {
  const loomObj = useLoomWithConfig();
  const {dispatch} = React.useContext(Store);
  const [name, setName] = React.useState("");


  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Add Skill" bordered={false} >
    <p className="strong-p">Enter name of new skill</p>
        <Input
          id="add-skill-input"
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
            onClick={async() => {       
              console.log("adding user", name);
              await addSkill(name, loomObj, dispatch);       
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
