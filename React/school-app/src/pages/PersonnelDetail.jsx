import { useEffect, useState } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonnelDetail = () => {
    const [person, setPerson] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    //   const { state } = useLocation();
    //   const data = useParams();
//   const { state: person } = useLocation();

  const getPerson = () => {
    fetch(` https://reqres.in/api/users/${id} `)
      .then((res) => {
        if(!res.ok){
          setError(true);
          setLoading(false);
          throw new Error("Something is wrong");
        }
         return res.json();
      }
    )
      .then((data) => {
        setLoading(false);
        setPerson(data.data)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  },);

  console.log(person);
  if (error) {
    return <NotFound/>;
  }
   if(loading){
    return (
      <div>
        <h1>Data Loading</h1>
      </div>
    );
  } 
  if(!error && !loading){
    return (
    <div className="personWrapper">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img src={person?.avatar} alt="img" />
      <p>{person?.email}</p>
      <div className="btnWrapper">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
  }
  

  
};

export default PersonnelDetail;
