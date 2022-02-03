import Navbar from "./components/Navbar/Navbar";
import ImagesRandom from "./components/ImagesRandom/ImagesRandom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="content">
          <h1>
            <span className="span1">better</span>
            <span className="span2">food,</span>
            <span className="span3">better life</span>
          </h1>
          <a href="#" className="btn">
            read more
            <i className="fas fa-arrow-right"></i>
          </a>
          <div className="icons">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
        <ImagesRandom />
      </section>
    </>
  );
}

export default App;
