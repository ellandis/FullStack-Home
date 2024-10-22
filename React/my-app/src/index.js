import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const tourData = [
  {
    id: 1,
    title: "Project Alpha",
    desc: "Initial phase of the new project focusing on ideation.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHPiBc8fmwujdmO0wBLOqfcqiNQJ8aZ8RGA&s",
    price: 10
  },
  {
    id: 2,
    title: "Development Beta",
    desc: "Phase where coding and development are done.",
    img: "https://www.libertytravel.com/sites/default/files/styles/full_size/public/all%20inclusive-hero%20%281%29.jpg?itok=bjulYGFg",
    price: 5
  },
  {
    id: 3,
    title: "Testing Gamma",
    desc: "Critical testing phase to identify bugs and issues.",
    img: "https://southpacific-vacations.com/wp-content/uploads/2011/03/BoraBoraVacations-708x300.jpg",
    tourIsUp: "TOUR IS OUT"
  },
  {
    id: 4,
    title: "Deployment Delta",
    desc: "Rolling out the project to production environment.",
    img: "https://blueduckholidays.com/wp-content/uploads/2017/07/Fiji20150812133210.jpg",
    price: 166
  },
  {
    id: 5,
    title: "Review Epsilon",
    desc: "Gathering feedback and making necessary improvements.",
    img: "https://www.hawaiitours.com/wp-content/uploads/2019/02/Na-Pali-Coast-Tunnels-and-Kee-Beach-Aerial-Helicopter-Kauai-shutterstock_1053409016-1200x600.jpg?x50639",
    tourIsUp: "TOUR IS OUT"
  },
];

function App() {
  const name = "Jani";
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
const Header = () => {
  return (
    <div>
      <header className="header">Tour Route</header>
    </div>
  );
};
const Main = () => {
  const tours = tourData;
  // const tours = [];
  return (
    <main className="main">
      {tours.length > 0 ? (
        <div className="renderList">
          {tourData.map((tour) => (
            <Tour tourObj={tour} key={tour.id} />
          ))}
        </div>
      ) : (
        <h1>Sorry....</h1>
      )}

      {/* <Tour name='Project Alpha' 
      location="Initial phase of the new project focusing on ideation"
      link="https://via.placeholder.com/150/0000FF/808080?text=Project+Alpha"
      price={12}  />
      <Tour name='Project YERRRRR' 
      location="The BIG Apple"
      link="https://media.istockphoto.com/id/946087016/photo/aerial-view-of-lower-manhattan-new-york.jpg?s=612x612&w=0&k=20&c=viLiMRznQ8v5LzKTt_LvtfPFUVl1oiyiemVdSlm29_k="  
      price={10}/> */}
    </main>
  );
};

const Tour = ({tourObj}) => {
  const {img,title,desc,price, tourIsUp} = tourObj
  console.log(tourObj);
  return (
    <div className={`tourWrapper ${tourIsUp ? "grey" : ""} `}>
      <img src={img} alt="" />
      <div className="tourBottom">
        <h2>{title}</h2>
        <p>{desc}</p>
        <span>{tourIsUp ? tourIsUp : price}</span>
      </div>
    </div>
  );
};

const Footer = (props) => {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 20;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(props);

  console.log(isOpen + " time " + openHours + " " + closeHours + " " + hour );

  return (
    <footer className="footer">
      {isOpen ? <Order closeHours={closeHours} openHours={openHours} /> : <p>Sorry we are closed.</p>}
    </footer>
  );
};

const Order = ({closeHours, openHours}) => {
  return (
    <div className="order">
      <p>We are open from {openHours}:00 to {closeHours}:00</p>
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
