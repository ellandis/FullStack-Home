import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";

const Home = () => {
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);

  const appId = process.env.REACT_APP_API_ID;
  const appKey = process.env.REACT_APP_API_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recipes);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <Card />
    </div>
  );
};

export default Home;
