import React from 'react'
import { Card, List } from 'antd';
import { fetchSkills } from '../../../common/Actions';
import useLoom from '../../chainstate/useLoom';
import useLoomToLoad from '../../chainstate/useLoomToLoad';
import { Store } from '../../../common/Store';
import useLoomWithConfig from '../../chainstate/useLoomWithConfig';




export default function ShowAllSkills(props:any) {
  const { dispatch } = React.useContext(Store);
  const loomObj = useLoomWithConfig();
  const skills = useLoomToLoad(loomObj, async() => {
    return await fetchSkills(loomObj, dispatch);
  });

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="All Skills" bordered={false} >
      <p>{JSON.stringify(skills)}</p>
      </Card>
    </div>
  )
}
