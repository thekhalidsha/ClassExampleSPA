import React, { useEffect, useState } from 'react'

const DynamicDemo = () => {
    const [first, setfirst] = useState(0);
    const [second, setsecond] = useState(0);

    useEffect(()=>{
        setfirst(0);
        console.log("Helloo");
    }, [second])

  return (
    <>
    {console.log("I am return")}
    First : {first} <br />
    Second : {second}
    <br />
    <button onClick={()=>{setfirst(first+1)}}>First Change</button>
    <button onClick={()=> {setsecond(second+1)}}>Second Change</button>
    </>
  )
}

export default DynamicDemo