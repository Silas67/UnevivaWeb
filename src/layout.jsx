import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const layout = () => {
  return (
    <>
      
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default layout
