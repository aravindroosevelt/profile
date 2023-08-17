import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Header />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
