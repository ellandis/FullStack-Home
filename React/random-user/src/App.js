import { useState, useEffect }from "react";
import Header from "./component/header/Header";
import Main from "./component/main/Main";

function App() {
  const [user, setUser] = useState("");
  

  const getData = async()=> {

    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
    console.log(user);
  };
  
  useEffect(() => {
    //component did mount
    getData();
  }, []);


  const {name,email, picture} = user;
  

  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
}

export default App;
