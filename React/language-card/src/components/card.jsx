import Language from "./language";
import {data} from "../data/data";

const Card  = () => {
    console.log(data);
    return (
        <div className="card">
            <h1>Language</h1>
            <div className="langWrapper">
                {data.map((lang,  index) => {
                    return <Language {...lang} key={index}/>
                })}
            </div>
        </div>
    )
};
export default Card;