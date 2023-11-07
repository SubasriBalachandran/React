import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';

function App() {
  return  (
    //to access the return with various statements <div> is used.
    <div>
      {
        <NavBar/>
        <main/>
        <footer/>
      }
  </div>
  );
}

export default App;

// import {Message} from "./Message";
// import { ListElements } from './ListElements';

//{/* <Message></Message>
//<ListElements></ListElements>    */
//(
  //   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );