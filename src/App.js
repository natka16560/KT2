import "./App.scss";
import Home from "./Components/Home";
import Password from "./Components/Password";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Password />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
