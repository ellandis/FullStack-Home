import shoppingList from "../data/data";
import List from "../component/List";
import Form from "./Form";

const Main = ({items, handleAddItems, onDeleteItem}) => {
    return(
        <div>
            <Form  handleAddItems={handleAddItems}  />
        <ul className="mainWrapper">
            {items.map( (item) => (
                <List item={item} key={item.id} onDeleteItem={onDeleteItem} />
            ))}
        </ul>
            </div>
    )
};

export default Main;