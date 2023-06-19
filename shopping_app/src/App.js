import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist.js";

function App() {
  const product = [
    {
      price: 999,
      naam: "lipstick",
      quantity: 0,
    },
    {
      price: 899,
      naam: "lipgloss",
      quantity: 0,
    },
  ];
  return (
    <>
      <Navbar />
      <Productlist myProps={product}/>
      {/* <Footer /> */}
    </>
  );
}

export default App;
