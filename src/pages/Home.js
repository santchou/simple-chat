import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="p-5 mt-5 mb-auto">
        <div className="container text-center">
          <h1>
            Simple Chat -- <span className="text-info">Hadron Test</span>
          </h1>
          <p className="lead py-5">To start please click the button below</p>
          <Link to="/contacts">
            <button className="btn btn-primary px-5">Start</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
