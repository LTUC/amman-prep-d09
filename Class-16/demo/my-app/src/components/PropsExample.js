function PropsExample(props) {
    console.log(props)
    const {name, age} = props; //De-structuring assignment
    // const name = props.name;
    // const age = props.age;
    return (
        <>
            <h3>Props Example</h3>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
        </>
    )
}

export default PropsExample;