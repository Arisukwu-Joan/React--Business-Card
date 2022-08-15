import "./App.css";
import Info from "./components/Info";
import Main from "./components/Main";
import Footer from "./components/Footer";
import jane from "./image/jane.png";

function App() {
  return (
    <div className="section">
      <div className="App">
        <div className="container">
          <img src={jane} alt="img" className="info-img" />
          <Info />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
