import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Items from "./components/Items";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Searchbox from "./components/SearchBox";

function App() {
  const continerStyle={
    "width":"1600px",
    "margin":"auto"
  }
  return (
    <div className="container" style={continerStyle}>
      <Navbar/>
      <Searchbox/>
     <Hero/>
     <Items/>
     <Contact/> 
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
