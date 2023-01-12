import { Link } from "react-router-dom";

const Header = ({ btnNameLeft, desc, btnNameRight, handleClick }) => {
  return (
    <div className=" container d-flex justify-content-between align-items-center">
      <Link to="/">
        <button className="btn btn-success text-white px-2 fw-bold">
          {btnNameLeft}
        </button>
      </Link>
      <h1 className="text-center p-3">{desc}</h1>

      <button className="btn btn-info px-2" onClick={handleClick}>
        {btnNameRight}
      </button>
    </div>
  );
};

export default Header;
