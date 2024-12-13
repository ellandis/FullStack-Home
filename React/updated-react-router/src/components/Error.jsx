import {useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log("should be error " + JSON.stringify(error) );

  const errorMessage =
    error.status + "\n" + error?.data ||
    "Unknown error occurred";

  return (
    <div className="errorWrapper">
      <h1 className="errors">ERROR Image</h1>
      <p>{errorMessage}</p>
      <div>
        <button onClick={() => navigate(-1)}> &larr;Back </button>
      </div>
    </div>
  );
};

export default Error;
