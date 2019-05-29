import React from 'react'

interface AccountProps{
  account:string|any;
}


export default function MyTestRW3Child(props:AccountProps) {

  React.useEffect(() => {
    console.log("useEffect([props.account])");
  }, [props.account]);

  return (
    <React.Fragment>
     <p>Account in child:{props.account}</p>
    </React.Fragment>
  )
}
