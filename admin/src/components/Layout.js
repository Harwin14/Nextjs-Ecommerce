import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

import { Poppins } from "next/font/google";
import { useState } from "react";
import Logo from "./Logo";
import MiniSideBar from "./MiniSideBar";

const font = Poppins({ weight: "400", subsets: ["latin"] });

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const { data: session } = useSession();

  const togleButton = () => {
    setShowNav(!showNav);
  };
  if (!session) {
    return (
      <div>
        <div className="bg-abu w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <button
              onClick={() => signIn("google")}
              className="bg-darkAbu p-2 px-4 rounded-lg"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-abu min-h-screen h-screen overflow-hidden relative">
      {showNav ? (
        <button
          onClick={togleButton}
          className=" absolute top-10 left-40  p-1 z-1 w-[35px] hover:rounded-full hover:bg-blue-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={togleButton}
          className="absolute top-10 left-5 rounded-full p-1 hover:bg-blue-200 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      <div className="flex">
        <div
          className={
            (showNav ? "w-[200px]" : "w-[60px]") +
            " transition-width duration-300 ease-linear"
          }
        >
          <Nav show={showNav} />
        </div>
        <div className="bg-darkAbu flex-grow mt-12  mr-4 mb-10 ml-[7px] rounded-[40px] p-10 h-[880px] ">
          {children}
        </div>
      </div>
    </div>
  );
}
