import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonnelDetail = () => {
    const [person, setPerson] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    //   const { state } = useLocation();
    //   const data = useParams();
//   const { state: person } = useLocation();

  const getPerson = () => {
    fetch(` https://reqres.in/api/users/${id} `)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  console.log(person);
  
  

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
};

export default PersonnelDetail;
