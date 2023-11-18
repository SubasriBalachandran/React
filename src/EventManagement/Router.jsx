import { Link, createBrowserRouter ,Router} from "react-router-dom"
import Regeister from "./Regeister"
import About from "./Login"
import Events from "./Events"

const Router= createBrowserRouter([{
       path:"/",element:<Layout/>,
       children:[
      {path:"",element:<Regeister/>},
      {path:"login",element:<Login/>},
      {path:"events",element:<Events/>},
   ]
}
]
)

export default Router