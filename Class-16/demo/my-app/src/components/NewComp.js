import MemesList from "./MemesList";

const data = require("./data.json");

function NewComp() {
    return (
        <div>
            <p> Hi from the new Comp </p>
            <MemesList arrData={data}/>
        </div>
    );
}

export default NewComp;