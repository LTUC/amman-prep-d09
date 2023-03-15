import { useEffect, useState } from "react";
import MemeList from './MemeList';

function FavList(){
    
    const [favArr, setFavArr] = useState([]);
    const sendReq = async () => {
        console.log(process.env.REACT_APP_serverURL);
        const serverURL = `${process.env.REACT_APP_serverURL}/favMeme`;
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data)
        setFavArr(data);
    }

    const takeNewArr = (newArr) =>{
        console.log("Fav List Comp ",newArr);
        setFavArr(newArr);
    }

    useEffect(()=>{
        sendReq();
    }, [])
    
    return(
        <>
        <h1>FavList</h1>
        <MemeList favArr={favArr} takeNewArr={takeNewArr}/>

        
        </>
    );
}

export default FavList;