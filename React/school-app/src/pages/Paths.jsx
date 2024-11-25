import { Outlet, Link } from "react-router-dom";

const Paths = () => {
  return (
    <div className="patWrapper">
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolores?
      </h1>
      <p>
        Absolute Paths: Start from the root directory of your project. Always
        point to the same location, regardless of the file's location that
        you're importing from. Example: import MyComponent from
        '/src/components/MyComponent';
      </p>
      <p>
        Relative Paths: Start from the file’s current directory. Change based on
        the location of the importing file. Example: import MyComponent from
        '../components/MyComponent';
      </p>
      <div className="btnGroup">
        <Link to="frontend">Frontend</Link>
        <Link to="backend">Backend</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
