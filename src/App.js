import { useState } from "react";
import Cart from "./Day3Components/CoffeeShop/Cart";
import Menu from "./Day3Components/CoffeeShop/Menu";
import NavBar from "./Day3Components/CoffeeShop/NavBar";
import Product from "./Day3Components/CoffeeShop/Product";
function App() {
  const [activeCategory, setActiveCategory] = useState(Product[0]);
  const [products, setProducts] = useState([]);
  const handleClick = (index) => {
    setActiveCategory(Product[index]);
  };
  const handleAddToCart = (item) => {
    setProducts([...products, item]);
  };
 return (
    <div >
      <NavBar category={Product} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} />
    </div>
  );
}
export default App;







// //import logo from "./logo.svg";
// import "./App.css";
// import InlineStyle from "./Components/InlineStyle";
// //import Greetings from "./Components/Greetings";
// //import Cart from "./Day3Components/CoffeeShop/Cart";
// //import DynammicRendering from "./Day3Components/CoffeeShop/DynammicRendering";
// //import ProfilePage from "./Style/ProfilePage";
// // import Menu from "./Day3Components/CoffeeShop/Menu";
// // import NavBar from "./Day3Components/CoffeeShop/NavBar";
// // import Product from "./Day3Components/CoffeeShop/Product";
// //import CricketCounts from "./Day3Components/CricketCounts";
// // import Footerr from "./Components/Footerr";
// // import MainDiv from "./Components/MainDiv";
// // import Headrer from "./Components/Headrer";

// function App() {
//   return (
//     <div>
//       {/*  <Greetings></Greetings><Headrer></Headrer><MainDiv></MainDiv><Footerr></Footerr> 
//     <CricketCounts></CricketCounts> 
//     <DynammicRendering></DynammicRendering>
//     <Cart></Cart> <Menu></Menu><NavBar></NavBar><Product></Product>*/
//     //<ProfilePage></ProfilePage>
//     <><InlineStyle></InlineStyle>
//     </>}

//     </div>
//   );
//     }
   
// export default App;