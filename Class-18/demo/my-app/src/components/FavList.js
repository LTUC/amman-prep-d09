import { useEffect, useState } from "react";
import MemeList from './MemeList';

function FavList(){
    
    const [favArr, setFavArr] = useState([]);
    const sendReq = async () => {
        const serverURL = `http://localhost:3002/favMeme`;
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data)
        setFavArr(data);
    }

    useEffect(()=>{
        sendReq();
    }, [])
    
    return(
        <>
        <h1>FavList</h1>
        <MemeList favArr={favArr}/>

        
        </>
    );
}

export default FavList;