import { useNavigate } from "react-router-dom";
import error from "../img/NotFound.jpg";


export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='errorWrapper'>
      <img src={error} alt="error" />
      <div className="btnWrapper">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  )
}
export default NotFound;