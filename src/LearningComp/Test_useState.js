import React from "react";
import { useState } from "react";

function TestuseState(){

    const [no, setNo] = useState(0);

    const clickbutton=()=>{
        setNo(no +1);
    }

    return(

        <>
        <div>
            <h1>Number counter</h1>
            {/* <button onClick={()=>setNo(no+1)}>Counter</button> */}
            <button onClick={clickbutton}>Counter</button>

            <p>{no}</p>
        </div>
        
        </>
    );

}

export default TestuseState;
