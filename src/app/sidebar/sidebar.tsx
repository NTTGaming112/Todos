import { IoHomeOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function Navbar({ setPage}: { setPage: (page: string) => void }) {
  return (
    <div className="flex flex-col h-full justify-center items-center bg-bgSidebar text-iconColor transition-transform transform">
      <div className="flex flex-col gap-9">
        <IconContext.Provider value={{ size: "2em" }}>
            <button
              className='flex flex-col items-center p-2 cursor-pointer'
              onClick={() => setPage("home")}
            >
              <IoHomeOutline />
              <span>HOME</span>
            </button>

            <button
              className='flex flex-col items-center p-2 cursor-pointer'
              onClick={() => setPage("todo")}
            >
              <IoFolderOpenOutline />
              <span>VIEW TODO</span>
            </button>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Navbar;