import React from 'react'
import { addSkill } from '../../../common/Actions';
import { Card, Input, Button } from 'antd';
import useLoom from '../../chainstate/useLoom';
import useStore from '../../../common/useStore';


export default function AddSkill() {
  const loomObj = useLoom();
  const [dispatch] = useStore();
  const [name, setName] = React.useState("");


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
            onClick={async() => {       
              console.log("adding user", name);
              await addSkill(name, loomObj, dispatch);       
              //await addSkillLocal(name, loomObj);
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

/*
  const addSkillLocal = async(name:string, loomObj:ILoomObject|any) => {
    console.log("addSkillLocal.adding user", name);
    console.log("loomObj", loomObj);
    if (loomObj && loomObj.instance){  
      await loomObj.instance.methods.addSkill(name).send({
        from: loomObj.currentUserAddress
      });
    }else{
      console.error("loom Obj is not available");
    }    
  }*/