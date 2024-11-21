import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Personnel = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  console.log(people);
  useEffect(() => {
    getPeople();
  }, []);
  return (
    <div className="perWrapper">
      <h1>Personnel List</h1>
      <div className="cardWrapper">
        {people.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div key={id} className="perCard">
              <img src={avatar} alt="img" />
              <p>
                {first_name} {last_name}
              </p>
              <button onClick={() => navigate(`/personnel/${id}`)}>
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personnel;
