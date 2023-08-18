import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Header />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
