import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const [items,setItems]= useState([]);

  const handleAddItems = (item) =>{
      setItems(items => [...items,item]);
  };
  const handleDeleteItem = (id)=>{
    setItems(items => items.filter((item) => item.id !== id));
  }
  return (
    <div className="appWrapper">
      <Header/>
      <Main items={items} handleAddItems={handleAddItems} onDeleteItem={handleDeleteItem} />
      <Footer/>
    </div>
  );
}

export default App;
