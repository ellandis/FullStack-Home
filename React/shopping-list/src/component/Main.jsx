import shoppingList from "../data/data";
import List from "../component/List";
import Form from "./Form";

const Main = () => {
    return(
        <div>
            <Form/>
        <ul className="mainWrapper">
            {shoppingList.map( (item) => (
                <List item={item} key={item.id}/>
            ))}
        </ul>
            </div>
    )
};

export default Main;