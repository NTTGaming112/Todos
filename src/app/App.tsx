import { useState } from "react";
import Navbar from "./sidebar/sidebar";
import Home from "./home/home";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import Todos from "./todos/todo";

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [page, setPage] = useState("home");
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="App h-screen">
      <div className="bg-bgSidebar w-full h-20 absolute">
      </div>
      
      <div className="flex flex-row h-full ">
        <div className={`w-40 transition-transform transform h-full ${
          showMenu ? "translate-x-0" : "-translate-x-full hidden"}`}>
          <Navbar setPage={setPage}/>
        </div>

        <div className="shrink w-full h-full flex justify-center">
          {page === "home" && <Home />}
          {page === "todo" && <Todos />}
        </div>
        <div className="flex justify-center items-center bg-bgSidebar w-20 h-20 absolute">
          <IconContext.Provider value={{ size: "3em" }}>
            <button
              onClick={toggleMenu}
              className="flex p-5 text-iconColor"
            >
              {showMenu ? <IoMdClose /> : <IoIosMenu />}
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App
