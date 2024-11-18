import { useState } from "react";
import Logo from "./logo";
import Info from "./info";
const Language = ({ name, img, options }) => {
  console.log(name, img, options);
  const [show, setShow] = useState(true);
  return (
    <div className="cardWrapper" onClick={() => setShow(!show)}>
      {show && (
        <Logo name={name} img={img} />
      )}
      {!show && (
        <Info options={options} />
      )}
    </div>
  );
};
export default Language;
