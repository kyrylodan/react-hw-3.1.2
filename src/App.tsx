
import './App.css'
import {Menu} from "./menu/Menu.tsx";
import {Outlet} from "react-router";

function App() {


  return (
    <>
<Menu/>
        this is app component
        <Outlet/>
    </>
  )
}

export default App
