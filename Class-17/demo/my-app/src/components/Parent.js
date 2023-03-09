import Child from './Child';
import boy1Img from './assets/boy1.jpg'
import boy2Img from './assets/boy2.jpg'
import { useState } from 'react';


function Parent(){

    const [totalToys, setTotalToys] = useState(20);
    const [boolVar, setBoolVar] = useState(false);

    const decrementTotalToys = (boolVal) => {
        setTotalToys(totalToys -1);
        setBoolVar(boolVal);
        console.log(boolVal);
        
    }
    return(
        <>
            <h2>Parent</h2>
            <h3>Total Number of Toys  : {totalToys}</h3>
            <Child name="Ahmad" age="10" imgPath={boy1Img} decrementFun={decrementTotalToys}/>
            <Child name="Khaled" age="15" imgPath={boy2Img} decrementFun={decrementTotalToys}/>

            {boolVar ? "Hello" : "Bye Bye :)"}
            
        </>
    )
}

export default Parent;