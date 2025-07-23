import ClientLayout from "../layout/client";
import About from "../pages/client/About";
import Contact from "../pages/client/Contact";
import Home from "../pages/client/Home";
import Register from "../pages/client/Register";
import TourList from "../pages/client/TourList";
import TourSearch from "../pages/client/TourSearch";
import Login from "../pages/shared/Login";

const ROUTES = [
    // client
    {
       path:'/',
       element:<ClientLayout/>,
       children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'about',
            element:<About/>
        },
         {
            path:'contact',
            element:<Contact/>
        },
        {
            path:'register',
            element:<Register/>
        },
         {
            path:'tourlist',
            element:<TourList/>
        },
           {
            path:'toursearch',
            element:<TourSearch/>
        },
         {
            path:'login',
            element:<Login/>
        }
       ]
    }
]

export default ROUTES;