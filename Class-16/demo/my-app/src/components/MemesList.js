function MemesList(props){
    console.log(props.arrData)
    return(
        <>
            <h2>Memes List</h2>
            {props.arrData.map((item)=>{
                return (
                    <div key={item.ID}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name}></img>
                        <p>{item.bottomText}</p>
                    </div>
                )
            })}
        </>
    )
}

export default MemesList;