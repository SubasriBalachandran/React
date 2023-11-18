import React from 'react'
// import FruitSurvey from './Day4/FruitSurvey'
// import MaterialButton from './Day4/LoginButton'
// import Form from './Day2/Form'

// function App() {
//   return (
//      <div>
//       <Form></Form>
//     {/* <FruitSurvey></FruitSurvey> <MaterialButton></MaterialButton>*/}
//     </div>
//   )
// }

// export default App




//import Toggling from "./Day3Components/Toggling"
//import FormComponents from "./Day3Components/FormComponents"
//import Transformation from "./Day3Components/Transformation"
// import Buttons from "./Day4/Counter/Buttons"
//day4
// import Counter from "./Day4/Counter/Counter"
// import Display from "./Day4/Counter/Display"
//import Styles from "./Day4/Styling/Styles"
//import Grouping from "./Day4/Styling/Grouping"
// import { GitHub } from "@mui/icons-material"
// import BasicMenu from "./Day4/Styling/DropDown"
// import MediaCard from "./Day4/Styling/MaterialCard"
// import MaterialGrid from "./Day4/Styling/MaterialGrid"



// function App() {
//   return (
//     <div>
//      <MaterialGrid></MaterialGrid><GitHub></GitHub>
//     <BasicMenu></BasicMenu>
//     <MediaCard></MediaCard>
//     </div>
//   )
// }
// function App() {
//   return (
//     <div>
//  <Styles></Styles>
//   <Grouping></Grouping>
//    <Toggling></Toggling>
//   <FormComponents></FormComponents>
//     <Transformation></Transformation> <Display></Display>
//      <Buttons></Buttons>
//      <Counter></Counter>
//     </div>
//   )
// }

//export default App

//project

import Regeister from "./EventManagement/Regeister"
import { Routes,Route } from 'react-router-dom'
import Navbar from './EventManagement/Navbar'
import Login from './EventManagement/Login'
function App() {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/regeister" element={<Regeister/>}></Route>
      </Routes>
    </div>
  )
}

export default App

// import { useState } from "react";
// import Cart from "./Day3Components/CoffeeShop/Cart";
// import Menu from "./Day3Components/CoffeeShop/Menu";
// import NavBar from "./Day3Components/CoffeeShop/NavBar";
// import Product from "./Day3Components/CoffeeShop/Product";
// function App() {
//   const [activeCategory, setActiveCategory] = useState(Product[0]);
//   const [products, setProducts] = useState([]);
//   const handleClick = (index) => {
//     setActiveCategory(Product[index]);
//   };
//   const handleAddToCart = (item) => {
//     setProducts([...products, item]);
//   };
//  return (
//     <div >
//       <NavBar category={Product} handleClick={handleClick} />
//       <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
//       <Cart products={products} />
//     </div>
//   );
// }
// export default App;


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

