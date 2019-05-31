import React from 'react'

interface AccountProps{
  account:string|any;
}


export default function MyTestRW3Child(props:any) {

  React.useEffect(() => {
    //console.log("useEffect([props.account])");
  }, [props.account]);

  console.log("mytestchild", props);
  
  return (
    <React.Fragment>
     <p>Account in child:{props.account}</p>
    </React.Fragment>
  )
}
